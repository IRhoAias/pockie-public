# Pockie Ninja Client

This project is the client for PN.

## Public Assets

To prevent long build times due to a large amount of assets the public assets are in another repo pockie-ninja-assets
You will want to create a symlink to these assets in this public folder.

Ex on windows command prompt with admin access:

`mklink /D <PATH>\client\public\assets <PATH>\pockie-ninja-assets\public`

replacing <PATH> with the windows path to those directories.
Example Client "<PATH>\client\public\assets" 		to "F:\PN Pub\client\public\assets"
		Asets  "<PATH>\pockie-ninja-assets\public"	to "F:\PN Pub\pockie-ninja-assets-main\public"
		
		Final command = mklink /D F:\PN Pub\client\public\assets F:\PN Pub\pockie-ninja-assets-main\public

