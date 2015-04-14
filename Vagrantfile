Vagrant.configure("2") do |config|
  config.vm.provider "docker" do |d|
    d.vagrant_vagrantfile = "VagrantVagrantfile"
    d.build_dir = "."
  end
  config.ssh.port = "22"
end
