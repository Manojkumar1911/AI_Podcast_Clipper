import { Upload, Play, Download } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-800/20 to-gray-900/20" id="dashboard">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Creative Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Upload, process, and export viral content with a beautiful, intuitive interface
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Minimized 3D Dashboard Mockup */}
          <div className="relative perspective-1000">
            <div className="transform rotateX-5 rotateY-2 transition-transform duration-1000 hover:rotateX-2 hover:rotateY-1 hover:scale-105">
              <div className="bg-gray-800/90 rounded-2xl border border-gray-700 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-blue-500/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Viral Clips Studio</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Upload Area */}
                <div className="mb-6 p-6 border-2 border-dashed border-gray-600 rounded-xl bg-gray-900/50 hover:border-blue-500 transition-all duration-300 cursor-pointer group">
                  <div className="text-center">
                    <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 text-base mb-1">Drop your podcast here</p>
                    <p className="text-gray-500 text-sm">Supports MP3, WAV, M4A up to 500MB</p>
                  </div>
                </div>

                {/* Processing Queue - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 text-sm">Processing Queue</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Joe Rogan Podcast #2047", status: "Transcribing...", progress: 45 },
                        { name: "Tim Ferriss Show", status: "Finding viral moments", progress: 78 }
                      ].map((item, i) => (
                        <div key={i} className="p-2 bg-gray-800 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-300">{item.name}</span>
                            <span className="text-xs text-blue-400">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Generated Clips Preview - Compact */}
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 text-sm">Ready Clips</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="group relative bg-gray-800 rounded-lg p-2 hover:bg-gray-750 transition-all duration-300 cursor-pointer hover:scale-105">
                          <div className="aspect-[9/16] bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg mb-1 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white/80 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="absolute bottom-0.5 left-0.5 right-0.5 bg-black/80 rounded text-xs text-white px-1">
                              &quot;Viral moment...&quot;
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Clip {i + 1}</span>
                            <div className="flex gap-1">
                              <Download className="w-3 h-3 text-gray-500 hover:text-white transition-colors" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats - Compact */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
                    <div className="text-xl font-bold text-blue-400 mb-1">47</div>
                    <div className="text-xs text-gray-400">Clips Generated</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
                    <div className="text-xl font-bold text-purple-400 mb-1">12.4M</div>
                    <div className="text-xs text-gray-400">Total Views</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
                    <div className="text-xl font-bold text-green-400 mb-1">98.2%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
