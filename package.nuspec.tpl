<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2010/07/nuspec.xsd">
    <metadata>
        <id>AngularJS.<%= module %></id>
        <version><%= version %></version>
        <title>AngularJS <%= module %></title>
        <authors>The AngularJS Team</authors>
        <owners>Scott Hanselman, John Papa</owners>
        <projectUrl>http://angularjs.org</projectUrl>
        <iconUrl>https://secure.gravatar.com/avatar/6e1b5ab3ef1593413f1bee4e5a6e6ae7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png</iconUrl>
        <requireLicenseAcceptance>false</requireLicenseAcceptance>
        <description>See the AngularJS.* packages for other Angular modules</description>
        <summary>AngularJS. HTML enhanced for web apps!

AngularJS.<%= module %> contains the Angular <%= module %> module. 

DISCLAIMER: This package is maintained by Scott Hanselman and John Papa, but neither of us work on Angular JS. This is simply a repackaging for use by NuGet Users</summary>
        <language>en-US</language>
        <tags>angular angularjs</tags>
        
        <% if (module !== 'Core') { %>
        <dependencies>
            <dependency id="AngularJS.Core" version="<%= version %>" />
        </dependencies>
        <% } %>
    </metadata>
    <files>
        <file src="*.*" target="content\Scripts" />
        <% if (module === 'Locale') { %>
            <file src="i18n\*.js" target="content\Scripts\i18n" />
        <% } %>
    </files>
</package>