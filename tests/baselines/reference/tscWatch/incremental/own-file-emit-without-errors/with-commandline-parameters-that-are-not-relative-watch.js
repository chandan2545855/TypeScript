/a/lib/tsc.js -w -p tsconfig.json
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/users/username/projects/project/file1.ts]
const x = 10;

//// [/users/username/projects/project/file2.ts]
const y = 20;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"incremental":true}}

//// [/users/username/projects/project/file1.js]
var x = 10;


//// [/users/username/projects/project/file2.js]
var y = 20;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
      },
      "./file1.ts": {
        "version": "5029505981-const x = 10;",
        "signature": "-4001438729-declare const x = 10;\n"
      },
      "./file2.ts": {
        "version": "2026007743-const y = 20;",
        "signature": "-4332632775-declare const y = 20;\n"
      }
    },
    "options": {
      "incremental": true,
      "watch": true,
      "project": "./tsconfig.json",
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ]
  },
  "version": "FakeTSVersion"
}


Output::
>> Screen clear
12:00:23 AM - Starting compilation in watch mode...



12:00:30 AM - Found 0 errors. Watching for file changes.


Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"watch":true,"project":"/users/username/projects/project/tsconfig.json","configFilePath":"/users/username/projects/project/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

WatchedFiles::
/users/username/projects/project/tsconfig.json:
  {"pollingInterval":250}
/users/username/projects/project/file1.ts:
  {"pollingInterval":250}
/users/username/projects/project/file2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/users/username/projects/project/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change::

//// [/users/username/projects/project/file2.ts]
const z = 10;

//// [/users/username/projects/project/file1.js] file written with same contents
//// [/users/username/projects/project/file2.js]
var z = 10;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
      },
      "./file1.ts": {
        "version": "5029505981-const x = 10;",
        "signature": "-4001438729-declare const x = 10;\n"
      },
      "./file2.ts": {
        "version": "3317474623-const z = 10;",
        "signature": "-368931399-declare const z = 10;\n"
      }
    },
    "options": {
      "incremental": true,
      "watch": true,
      "project": "./tsconfig.json",
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ]
  },
  "version": "FakeTSVersion"
}


Output::
>> Screen clear
12:00:34 AM - Starting compilation in watch mode...



12:00:44 AM - Found 0 errors. Watching for file changes.


Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"watch":true,"project":"/users/username/projects/project/tsconfig.json","configFilePath":"/users/username/projects/project/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

WatchedFiles::
/users/username/projects/project/tsconfig.json:
  {"pollingInterval":250}
/users/username/projects/project/file1.ts:
  {"pollingInterval":250}
/users/username/projects/project/file2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/users/username/projects/project/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
