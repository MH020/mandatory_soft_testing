{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_26
    yarn
    typescript
    postgresql
    bruno-cli
  ];

  shellHook = ''
    echo "Node.js development environment loaded (Node $(node --version), npm $(npm --version))"
  '';
}
