(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),o=(n(0),n(99)),a={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Pyre can be run without a configuration (see Command Line Arguments) but we do recommend that you create a configuration (see Getting Started) and commit that to your version control system to make sure everyone working on your project is using the same settings.",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/configuration.md",version:"current",sidebar_label:"Configuration",sidebar:"pyre",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Types in Python",permalink:"/docs/types-in-python"}},l=[{value:"Configuration Files",id:"configuration-files",children:[{value:"The Global Configuration",id:"the-global-configuration",children:[]},{value:"Local Configurations",id:"local-configurations",children:[]}]},{value:"Command Line Arguments",id:"command-line-arguments",children:[{value:"Commands",id:"commands",children:[]},{value:"Commonly Used Flags",id:"commonly-used-flags",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pyre can be run without a configuration (see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#command-line-arguments"}),"Command Line Arguments"),") but we do recommend that you create a configuration (see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started"),") and commit that to your version control system to make sure everyone working on your project is using the same settings."),Object(o.b)("h2",{id:"configuration-files"},"Configuration Files"),Object(o.b)("p",null,"Pyre has two types of configurations: a ",Object(o.b)("em",{parentName:"p"},"global")," configuration covering the full project, and ",Object(o.b)("em",{parentName:"p"},"local")," configurations that apply to subdirectories of the project. In most cases you will only need a global configuration but local configurations can be useful if you are dealing with a big repository containing heterogeneous projects."),Object(o.b)("h3",{id:"the-global-configuration"},"The Global Configuration"),Object(o.b)("p",null,"The global configuration is a ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," file sitting at the root of your project. Running Pyre anywhere inside your project directory will use the settings in this global configuration. You can generate an initial configuration in your project directory with"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ pyre init\n")),Object(o.b)("p",null,"The configuration is a ",Object(o.b)("inlineCode",{parentName:"p"},"JSON")," file. For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "source_directories": [\n    "."\n  ],\n  "search_path": [\n    "/external/library"\n  ]\n}\n')),Object(o.b)("p",null,"specifies that the code Pyre checks is in the directory of the configuration and that Pyre should look in an additional directory for library code."),Object(o.b)("p",null,"You specify additional information to configure Pyre. The following fields are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"source_directories"),": List of paths to type check."),Object(o.b)("p",{parentName:"li"},"Note: Pyre assumes that all imports are relative to the given source directory. For example, if your source directory is ",Object(o.b)("inlineCode",{parentName:"p"},"root/directory"),", then an import statement ",Object(o.b)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",Object(o.b)("inlineCode",{parentName:"p"},"root.directory.module"),". If you wish to set a different import root for your source directory, you can provide an object ",Object(o.b)("inlineCode",{parentName:"p"},'{"import_root": "root", "source": "directory"}')," instead of ",Object(o.b)("inlineCode",{parentName:"p"},'"root/directory"'),". In this case, ",Object(o.b)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",Object(o.b)("inlineCode",{parentName:"p"},"root.module"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"search_path"),": List of paths to Python modules to include in the typing\nenvironment. ",Object(o.b)("strong",{parentName:"p"},"Note"),": ",Object(o.b)("inlineCode",{parentName:"p"},"search_path")," takes precendence over ",Object(o.b)("inlineCode",{parentName:"p"},"source_directories")," and the order within the search path indicates precedence.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"exclude"),": List of regular expressions such as ",Object(o.b)("inlineCode",{parentName:"p"},'".*\\/node_modules\\/.*"')," which\nspecify files and directories that should be completely ignored by Pyre. The\nregular expression will be matched against the ",Object(o.b)("em",{parentName:"p"},"full")," path of files as opposed\nto their relative path.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),": A list of paths to omit from type-checking. This may be\nuseful for generated files, virtualenv directories, etc.  These should be paths\nrelative to the location of the configuration file (or the local configuration\nif applicable) and support globs. ",Object(o.b)("strong",{parentName:"p"},"Note"),": Files\nmatching these paths will still be processed (i.e. type and module names in those files are still visible to Pyre). Please refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"exclude"),"\nconfiguration item if you have files that are intended to be hidden from Pyre.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"binary"),": Location of Pyre's native binary.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"logger"),": Pyre will invoke this exectuable on every run, passing it statistics in JSON format.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"typeshed"),": Path to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library, which\nprovides typed stubs for library functions.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"workers"),": Number of workers to spawn for multiprocessing.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"extensions"),": Consider extensions in this list equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},".py")," for type checking.\nEmpty string indicates extensionless files.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"strict"),": Setting this to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," will make ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/types-in-python#strict-mode"}),"strict mode")," the default in your project."))),Object(o.b)("h3",{id:"local-configurations"},"Local Configurations"),Object(o.b)("p",null,"If you have sub-projects within your project root that you would like to run Pyre on, you\ncan create a ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration.local")," at the root of your subproject and override any\nof the fields set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," above. If you are using local configurations, your\n",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," should not specify any sources itself."),Object(o.b)("p",null,"When calling Pyre, the nearest local configuration at- or above the current directory will be used.\nYou can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--local-configuration")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"-l"),") flag to invoke Pyre on a project that includes a\nlocal configuration, while outside its source directory. It works like ",Object(o.b)("inlineCode",{parentName:"p"},"make -C"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ ls project\n  .pyre_configuration.local   project_file.py   ...\n$ pyre -l project\n  Checking...\n")),Object(o.b)("h4",{id:"nested-local-configurations"},"Nested Local Configurations"),Object(o.b)("p",null,"Nesting local configurations is not supported. The configuration should live at the root of your\nproject unit and inclusion/exclusion of files from type checking can be done by specifying sources, using\n",Object(o.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),", or by adding ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/errors#suppressing-individual-errors"}),"local suppression"),"."),Object(o.b)("h2",{id:"command-line-arguments"},"Command Line Arguments"),Object(o.b)("p",null,"You can get a full and current list of options to run Pyre by running ",Object(o.b)("inlineCode",{parentName:"p"},"pyre --help"),". The following is a list of commonly used commands and options."),Object(o.b)("h3",{id:"commands"},"Commands"),Object(o.b)("p",null,"Pyre comes with a couple commands that can be invoked with ",Object(o.b)("inlineCode",{parentName:"p"},"pyre <COMMAND>"),"."),Object(o.b)("p",null,"The first command you might come in contact with is"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize"),", ",Object(o.b)("inlineCode",{parentName:"li"},"init"),": Initial setup of a configuration for a project.")),Object(o.b)("p",null,"If ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://facebook.github.io/watchman/docs/install/"}),"Watchman")," is\ninstalled, running Pyre with no positional arguments defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"incremental"),",\notherwise defaults to check."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"check"),": Run Pyre end-to-end, i.e. ",Object(o.b)("em",{parentName:"li"},"not")," incrementally."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"incremental"),": Run Pyre incrementally. When invoked for the first time, the command will automatically start a server listening to changes to the filesystem. Subsequent invocations will be faster.")),Object(o.b)("p",null,"When Pyre is run incrementally, you can control the Pyre's ",Object(o.b)("em",{parentName:"p"},"server")," working in the background with the following commands."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"start"),": Start the Pyre server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stop"),": Stop the Pyre server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restart"),": Restart the Pyre server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"servers"),": List all currently running Pyre servers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"kill"),": In case somethign goes wrong and the server becomes unresponsivbe ",Object(o.b)("inlineCode",{parentName:"li"},"kill")," will attempt to terminate any processes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rage"),": Print server logs for debugging or for context when reporting server errors.")),Object(o.b)("h3",{id:"commonly-used-flags"},"Commonly Used Flags"),Object(o.b)("p",null,"These flags can be passed in before any of the positional arguments above. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre --source-directory "." --noninteractive check\n$ pyre --source-directory "." restart\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--local-configuration LOCAL_CONFIGURATION"),": Call Pyre specifying the path to a local\nconfiguration.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--noninteractive"),": Disable interactive logging, which by default overwrites intermediate\nlogging output and adds colors for a more streamlined user experience.\nNon-interactive mode ensures all terminal output remains visible.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--output {text, json}"),": Formatting for error return values. Defaults to text.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--search-path SEARCH_PATH"),": Provide additional stubs or modules external to the project\nbeing type-checked. Can also be set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--source-directory SOURCE_DIRECTORY"),": Provide a path to the source root to check. This can also\nbe specified in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--typeshed TYPESHED"),": Path to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library,\nwhich provides typed stubs for library functions. This can also be set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--verbose"),": Enable verbose logging. Most useful when used in conjunction with ",Object(o.b)("inlineCode",{parentName:"p"},"--noninteractive"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"--version"),": Print the current version of Pyre."))))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,d=s["".concat(a,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var b=2;b<o;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);