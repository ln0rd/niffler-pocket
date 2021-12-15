## Niffler Pocket

This project has been created to provide some help to manager your passwords
locally, OTP client and Two Fac tokens generator.

Working like Google authenticator or Authy the Niffler can save privates tokens and use it to
generate the token.

#### How It works

Always that you will open the niffler it will create in your home a folder calling `.niffler`, this folder contains
a json file with name `pocket.json`, this file contains all content encrypted, so if you need migrate it
you just need copy this file.

All content save with this project is encrypted with AES (Advanced Encryption Standart)
ensuring that all content that would be save using this project it is very secury.

---

#### Some options that you can do with Niffler

- register twofac token
- search twofac token
- register password
- search password
- generate random password

---

#### Requirements

- node >= 17.2.0

#### The Name

Why Niffler? so this name come from Harry potter world that Niffler is a magical creature that has a pocket, and
it like to catch everything that has some value, like gold and jewelry, because this this niffler can save in your pocket
special things.

#### [WIP] Install

Aiming to facilitate the execution about niffler, execute the `install.sh` with sudo to create the alias and to execute just run
in your terminal `niffler`.

```
sudo ./install.sh
```

At this moment `install.sh` just run in bash profile and zsh.

#### Nexts steps

- Install.sh
- Sync pocket file with Gdrive;
- Sync pocket file with OneDrive;
- Refactor code;
- Import from OnePassword;
- Import from LastPass;
- import from BitWarden;
- import from dashlane;
- Choose type of encrypt;
- Refactor Command line interface;
