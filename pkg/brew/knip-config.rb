# Homebrew formula for @sebastienrousseau/knip-config.
#
# A library rather than a CLI, so this is only useful to someone who wants the
# preset available outside a project's node_modules. `npm install` remains the
# supported path.
class KnipConfig < Formula
  desc "Shareable Knip configuration rules for finding unused files, dependencies, and exports"
  homepage "https://github.com/sebastienrousseau/knip-config"
  url "https://registry.npmjs.org/@sebastienrousseau/knip-config/-/knip-config-0.0.7.tgz"
  license any_of: ["Apache-2.0", "MIT"]

  depends_on "node"

  def install
    system "npm", "install", *std_npm_args
  end

  test do
    output = shell_output("#{Formula["node"].opt_bin}/node -e " \
      "'console.log(typeof require(\"#{libexec}/lib/node_modules/@sebastienrousseau/knip-config\"))'")
    assert_equal "object", output.strip
  end
end
