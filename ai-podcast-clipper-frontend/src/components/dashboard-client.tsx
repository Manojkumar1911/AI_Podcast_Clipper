"use client";

import Dropzone, { type DropzoneState } from "shadcn-dropzone";
import type { Clip } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Loader2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { generateUploadUrl } from "~/actions/s3";
import { toast } from "sonner";
import { processVideo } from "~/actions/generation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { ClipDisplay } from "./clip-display";

export function DashboardClient({
  uploadedFiles,
  clips,
}: {
  uploadedFiles: {
    id: string;
    s3Key: string;
    filename: string;
    status: string;
    clipsCount: number;
    createdAt: Date;
  }[];
  clips: Clip[];
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const handleRefresh = async () => {
    setRefreshing(true);
    router.refresh();
    setTimeout(() => setRefreshing(false), 600);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const file = files[0]!;
    setUploading(true);

    try {
      const { success, signedUrl, uploadedFileId } = await generateUploadUrl({
        filename: file.name,
        contentType: file.type,
      });

      if (!success) throw new Error("Failed to get upload URL");

      const uploadResponse = await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (!uploadResponse.ok)
        throw new Error(`Upload filed with status: ${uploadResponse.status}`);

      await processVideo(uploadedFileId);

      setFiles([]);

      toast.success("Video uploaded successfully", {
        description:
          "Your video has been scheduled for processing. Check the status below.",
        duration: 5000,
      });
    } catch (error) {
      toast.error("Upload failed", {
        description:
          "There was a problem uploading your video. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-8 px-4 py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-xl border border-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Podcast Clipper
          </h1>
          <p className="text-gray-700">
            Upload your podcast and get AI-generated clips instantly
          </p>
        </div>
        <Link href="/dashboard/billing">
          <Button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg hover:from-orange-500 hover:to-pink-500 transition-all duration-200">
            Buy Credits
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="upload">
        <TabsList className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-1 rounded-lg shadow-md border border-gray-100">
          <TabsTrigger 
            value="upload" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200 hover:bg-white/50 data-[state=active]:hover:from-blue-600 data-[state=active]:hover:to-purple-600"
          >
            Upload
          </TabsTrigger>
          <TabsTrigger 
            value="my-clips"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200 hover:bg-white/50 data-[state=active]:hover:from-purple-600 data-[state=active]:hover:to-pink-600"
          >
            My Clips
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card className="bg-white/70 border-white/90 rounded-xl shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Upload Podcast</CardTitle>
              <CardDescription className="text-gray-700">
                Upload your audio or video file to generate clips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dropzone
                onDrop={handleDrop}
                accept={{ "video/mp4": [".mp4"] }}
                maxSize={500 * 1024 * 1024}
                disabled={uploading}
                maxFiles={1}
              >
                {(dropzone: DropzoneState) => (
                  <>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg p-10 text-center">
                      <UploadCloud className="text-muted-foreground h-12 w-12 mt-2" />
                      <div className="flex flex-col items-center">
                        <p className="font-medium">Drag and drop your file</p>
                        <p className="text-muted-foreground text-sm">
                          or click to browse (MP4 up to 500MB)
                        </p>
                      </div>
                      <Button
                        className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg hover:from-green-500 hover:to-blue-500 transition-colors duration-200"
                        variant="default"
                        size="sm"
                        disabled={uploading}
                      >
                        Select File
                      </Button>
                    </div>
                  </>
                )}
              </Dropzone>

              <div className="mt-2 flex items-start justify-between">
                <div>
                  {files.length > 0 && (
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">Selected file:</p>
                      {files.map((file) => (
                        <p key={file.name} className="text-muted-foreground">
                          {file.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  disabled={files.length === 0 || uploading}
                  onClick={handleUpload}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload and Generate Clips"
                  )}
                </Button>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Queue status
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRefresh}
                      disabled={refreshing}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-none shadow-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      {refreshing && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Refresh
                    </Button>
                  </div>
                  <div className="max-h-[300px] overflow-auto rounded-xl border border-white/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 shadow-xl backdrop-blur-sm">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-white/80">
                          <TableHead className="text-gray-700 font-semibold py-4">File</TableHead>
                          <TableHead className="text-gray-700 font-semibold py-4">Uploaded</TableHead>
                          <TableHead className="text-gray-700 font-semibold py-4">Status</TableHead>
                          <TableHead className="text-gray-700 font-semibold py-4">Clips created</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {uploadedFiles.map((item) => (
                          <TableRow 
                            key={item.id} 
                            className="hover:bg-white/60 transition-all duration-300 group"
                          >
                            <TableCell className="max-w-xs truncate font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                              {item.filename}
                            </TableCell>
                            <TableCell className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              {item.status === "queued" && (
                                <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 shadow-sm group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                  Queued
                                </Badge>
                              )}
                              {item.status === "processing" && (
                                <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 shadow-sm group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                                  Processing
                                </Badge>
                              )}
                              {item.status === "processed" && (
                                <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-sm group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
                                  Processed
                                </Badge>
                              )}
                              {item.status === "no credits" && (
                                <Badge variant="destructive" className="bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-red-200 shadow-sm group-hover:from-red-100 group-hover:to-rose-100 transition-all duration-300">
                                  No credits
                                </Badge>
                              )}
                              {item.status === "failed" && (
                                <Badge variant="destructive" className="bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-red-200 shadow-sm group-hover:from-red-100 group-hover:to-rose-100 transition-all duration-300">
                                  Failed
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {item.clipsCount > 0 ? (
                                <span className="text-gray-800 font-medium group-hover:text-indigo-700 transition-colors duration-300">
                                  {item.clipsCount} clip
                                  {item.clipsCount !== 1 ? "s" : ""}
                                </span>
                              ) : (
                                <span className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                                  No clips yet
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-clips">
          <Card className="bg-white/70 border-white/90 rounded-xl shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">My Clips</CardTitle>
              <CardDescription className="text-gray-700">
                View and manage your generated clips here. Processing may take a
                few minuntes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClipDisplay clips={clips} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}