(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            oldElement.props,
            oldElement._owner,
            oldElement._debugStack,
            oldElement._debugTask
          );
          oldElement._store && (newKey._store.validated = oldElement._store.validated);
          return newKey;
        }
        function validateChildKeys(node) {
          isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 1;
                  payload._result = moduleObject;
                  var _ioInfo = payload._ioInfo;
                  null != _ioInfo && (_ioInfo.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 2;
                  payload._result = error;
                  var _ioInfo2 = payload._ioInfo;
                  null != _ioInfo2 && (_ioInfo2.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              }
            );
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
              ioInfo.value = thenable;
              var displayName = thenable.displayName;
              "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
          }
          if (1 === payload._status)
            return ioInfo = payload._result, void 0 === ioInfo && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ioInfo
            ), "default" in ioInfo || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ioInfo
            ), ioInfo.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function releaseAsyncTransition() {
          ReactSharedInternals.asyncTransitions--;
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        };
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          asyncTransitions: 0,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0
        }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        deprecatedAPIs = {
          react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
          deprecatedAPIs,
          UnknownOwner
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        deprecatedAPIs = Object.freeze({
          __proto__: null,
          c: function(size) {
            return resolveDispatcher().useMemoCache(size);
          }
        });
        var fnName = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Activity = REACT_ACTIVITY_TYPE;
        exports.Children = fnName;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.__COMPILER_RUNTIME = deprecatedAPIs;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$0) {
                        ReactSharedInternals.thrownErrors.push(error$0);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cacheSignal = function() {
          return null;
        };
        exports.captureOwnerStack = function() {
          var getCurrentStack = ReactSharedInternals.getCurrentStack;
          return null === getCurrentStack ? null : getCurrentStack();
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(
            element.type,
            key,
            props,
            owner,
            element._debugStack,
            element._debugTask
          );
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key]);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i]);
          i = {};
          var key = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          key && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return ReactElement(
            type,
            key,
            i,
            getOwner(),
            propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement;
        exports.lazy = function(ctor) {
          ctor = { _status: -1, _result: ctor };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
          }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
          };
          ctor._ioInfo = ioInfo;
          lazyType._debugInfo = [{ awaited: ioInfo }];
          return lazyType;
        };
        exports.memo = function(type, compare) {
          null == type && console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          ReactSharedInternals.T = currentTransition;
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
              "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
            ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useEffectEvent = function(callback) {
          return resolveDispatcher().useEffectEvent(callback);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.2.7";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // campaign.tsx
  var import_react = __toESM(require_react());
  var DONATE_URL = "#donate";
  var CANDIDATE_PHOTO = "./wc-photo.webp";
  var C = {
    canvas: "#0B1F4F",
    canvasDeep: "#060D24",
    canvasMid: "#112660",
    gold: "#F2B705",
    goldLight: "#FFD04A",
    salmon: "#FF7B7B",
    sky: "#D6F3FF",
    skyMid: "#2E78C7",
    electric: "#2619D1",
    light: "#F7F9FC",
    textLight: "#FFFFFF",
    textDark: "#0D1B2A",
    textMuted: "rgba(255,255,255,0.62)",
    textDarkMuted: "#5A6A80",
    borderLight: "rgba(255,255,255,0.12)",
    borderDark: "#D8E1EE",
    glass: "rgba(255,255,255,0.06)",
    glassBorder: "rgba(255,255,255,0.10)"
  };
  var GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0; padding: 0; overflow-x: hidden;
    background: ${C.canvas};
    color: ${C.textLight};
    font-family: 'IBM Plex Serif', Georgia, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button, input, select, textarea { font-family: inherit; }
  img { display: block; max-width: 100%; }
  a { color: ${C.sky}; }

  /* \u2500\u2500 Keyframe animations \u2500\u2500 */
  @keyframes word-rise {
    from { transform: translateY(110%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes gradient-flow {
    0%   { background-position: 0% center; }
    50%  { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes spark-burst {
    to { transform: rotate(var(--angle)) translateY(-38px); opacity: 0; scale: 0; }
  }
  @keyframes scroll-bob {
    0%, 100% { transform: translateY(0);  opacity: 0.7; }
    50%       { transform: translateY(8px); opacity: 0.3; }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* \u2500\u2500 Scroll reveal \u2500\u2500 */
  [data-reveal] {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                transform 0.85s cubic-bezier(0.16,1,0.3,1);
  }
  [data-reveal="left"]  { transform: translateX(-40px); }
  [data-reveal="right"] { transform: translateX( 40px); }
  [data-reveal="scale"] { transform: scale(0.92); }
  [data-reveal].revealed { opacity: 1; transform: none; }

  /* \u2500\u2500 BlurText reveal \u2500\u2500 */
  [data-blur] {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(20px);
    transition: opacity 1s ease, filter 1s ease, transform 1s ease;
  }
  [data-blur].revealed { opacity: 1; filter: blur(0); transform: none; }

  /* \u2500\u2500 SpotlightCard hover glow \u2500\u2500 */
  .card-spot::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(
      560px circle at var(--mx, 50%) var(--my, 50%),
      rgba(242,183,5,0.11), transparent 60%
    );
    opacity: 0;
    transition: opacity 300ms ease;
    pointer-events: none;
    border-radius: inherit;
  }
  .card-spot:hover::before { opacity: 1; }

  /* \u2500\u2500 Spark \u2500\u2500 */
  .spark {
    position: absolute; pointer-events: none;
    width: 6px; height: 6px; border-radius: 50%;
    background: ${C.gold};
    animation: spark-burst 0.55s ease forwards;
  }

  /* \u2500\u2500 Nav glass state \u2500\u2500 */
  .nav-scrolled {
    background: rgba(11,31,79,0.90) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.10) !important;
  }

  /* \u2500\u2500 Issues left-pin layout \u2500\u2500 */
  .issues-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .issues-pin {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 48px 60px 40px;
    border-right: 1px solid rgba(255,255,255,0.10);
    background: ${C.canvasDeep};
  }
  .issues-scroll { /* right side \u2014 natural scroll */ }
  .issue-item {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 48px;
    opacity: 0.22;
    transition: opacity 0.5s ease;
  }
  .issue-item.is-active { opacity: 1; }

  /* \u2500\u2500 prefers-reduced-motion \u2500\u2500 */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
    }
    [data-reveal], [data-blur] { opacity: 1 !important; transform: none !important; filter: none !important; }
  }

  /* \u2500\u2500 Responsive \u2500\u2500 */
  @media (max-width: 900px) {
    .issues-grid { grid-template-columns: 1fr; }
    .issues-pin {
      position: static; height: auto;
      padding: 60px 24px 32px;
      border-right: none;
      border-bottom: 1px solid rgba(255,255,255,0.10);
    }
    .issue-item { min-height: auto; padding: 40px 24px; opacity: 1; }
    .hide-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
  }
  @media (max-width: 600px) {
    .issues-pin { padding: 48px 20px 24px; }
    .issue-item { padding: 32px 20px; }
  }
`;
  var PAGES = ["Home", "About", "Issues", "Endorsements", "Volunteer", "Contact"];
  function useReveal() {
    (0, import_react.useEffect)(() => {
      const els = document.querySelectorAll("[data-reveal]:not(.revealed), [data-blur]:not(.revealed)");
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = parseFloat(e.target.dataset.delay ?? "0");
          setTimeout(() => e.target.classList.add("revealed"), delay * 1e3);
          obs.unobserve(e.target);
        });
      }, { threshold: 0.12 });
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    });
  }
  function StarRing({ size = 120, stars = 10, color = C.gold, opacity = 1 }) {
    const cx = size / 2, cy = size / 2, r = size * 0.38;
    const pts = Array.from({ length: stars }, (_, i) => {
      const a = i / stars * Math.PI * 2 - Math.PI / 2;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    });
    function Star({ x, y }) {
      const s = size * 0.052;
      const d = Array.from({ length: 10 }, (_, k) => {
        const rad = k % 2 === 0 ? s : s / 2.4;
        const ang = k / 10 * Math.PI * 2 - Math.PI / 2;
        return `${x + rad * Math.cos(ang)},${y + rad * Math.sin(ang)}`;
      }).join(" ");
      return /* @__PURE__ */ import_react.default.createElement("polygon", { points: d, fill: color });
    }
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size, height: size, style: { opacity, display: "block" } }, pts.map(([x, y], i) => /* @__PURE__ */ import_react.default.createElement(Star, { key: i, x, y })));
  }
  function Marquee() {
    const items = "WEST COVINA  \xB7  DISTRICT 5  \xB7  AFFORDABLE HOUSING  \xB7  PUBLIC SAFETY  \xB7  BETTER SCHOOLS  \xB7  LOCAL JOBS  \xB7  JIMMY LIMA  \xB7  FOR THE COMMUNITY  \xB7  ";
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { overflow: "hidden", background: C.gold, padding: "14px 0", userSelect: "none" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: {
      display: "inline-flex",
      whiteSpace: "nowrap",
      animation: "marquee-scroll 32s linear infinite"
    } }, [0, 1].map((n) => /* @__PURE__ */ import_react.default.createElement("span", { key: n, style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 20,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: C.canvasDeep,
      paddingRight: 0
    } }, items))));
  }
  function SpotCard({ children, style }) {
    const ref = (0, import_react.useRef)(null);
    const raf = (0, import_react.useRef)(0);
    const onMove = (0, import_react.useCallback)((e) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    }, []);
    return /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        ref,
        className: "card-spot",
        onMouseMove: onMove,
        style: {
          position: "relative",
          overflow: "hidden",
          background: C.glass,
          border: `1px solid ${C.glassBorder}`,
          borderRadius: 16,
          padding: "28px 24px",
          transition: "border-color 250ms ease, transform 250ms ease, box-shadow 250ms ease",
          ...style
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = "rgba(242,183,5,0.35)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.26)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = C.glassBorder;
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }
      },
      children
    );
  }
  function MagnetBtn({ children, onClick, style, spark = false }) {
    const ref = (0, import_react.useRef)(null);
    const raf = (0, import_react.useRef)(0);
    const hover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
    const onMove = (0, import_react.useCallback)((e) => {
      if (!hover || !ref.current) return;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        ref.current.style.transform = `translate(${dx}px,${dy}px)`;
      });
    }, [hover]);
    const onLeave = (0, import_react.useCallback)(() => {
      cancelAnimationFrame(raf.current);
      if (ref.current) ref.current.style.transform = "";
    }, []);
    const handleClick = (0, import_react.useCallback)((e) => {
      if (spark && ref.current) {
        const r = ref.current.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        for (let i = 0; i < 12; i++) {
          const s = document.createElement("span");
          s.className = "spark";
          s.style.cssText = `left:${x}px;top:${y}px;--angle:${i * 30}deg`;
          ref.current.appendChild(s);
          s.addEventListener("animationend", () => s.remove(), { once: true });
        }
      }
      onClick?.();
    }, [spark, onClick]);
    const handleLeave = (0, import_react.useCallback)((e) => {
      onLeave();
      e.currentTarget.style.background = style?.background ?? C.gold;
      e.currentTarget.style.boxShadow = "";
    }, [onLeave, style]);
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        ref,
        onMouseMove: onMove,
        onMouseLeave: handleLeave,
        onClick: handleClick,
        style: {
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: C.gold,
          color: C.canvasDeep,
          padding: "14px 32px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "background 200ms ease, box-shadow 200ms ease",
          ...style
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = C.goldLight;
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(242,183,5,0.40)";
        }
      },
      children
    );
  }
  function GhostBtn({ children, onClick, style }) {
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick,
        style: {
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: "transparent",
          color: C.textLight,
          padding: "13px 28px",
          borderRadius: 999,
          border: `2px solid rgba(255,255,255,0.40)`,
          cursor: "pointer",
          transition: "border-color 200ms ease, color 200ms ease",
          ...style
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = C.gold;
          e.currentTarget.style.color = C.gold;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.40)";
          e.currentTarget.style.color = C.textLight;
        }
      },
      children
    );
  }
  function SHead({ eyebrow, title, light = false, center = false }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { marginBottom: 48, textAlign: center ? "center" : "left" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.gold,
      margin: "0 0 10px"
    } }, eyebrow), /* @__PURE__ */ import_react.default.createElement("div", { style: {
      width: 60,
      height: 4,
      background: C.gold,
      borderRadius: 2,
      margin: center ? "0 auto 18px" : "0 0 18px"
    } }), /* @__PURE__ */ import_react.default.createElement("h2", { "data-blur": true, style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(28px,4vw,54px)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      lineHeight: 1,
      margin: 0,
      color: light ? C.textDark : C.textLight
    } }, title));
  }
  function Nav({ page, go }) {
    const [scrolled, setScrolled] = (0, import_react.useState)(false);
    const [open, setOpen] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      const fn = () => setScrolled(window.scrollY > 70);
      window.addEventListener("scroll", fn, { passive: true });
      return () => window.removeEventListener("scroll", fn);
    }, []);
    const nav = (p) => {
      setOpen(false);
      go(p);
    };
    const linkStyle = (p) => ({
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      padding: "4px 0",
      color: page === p ? C.gold : "rgba(255,255,255,0.72)",
      borderBottom: page === p ? `1.5px solid ${C.gold}` : "1.5px solid transparent",
      transition: "color 180ms, border-color 180ms"
    });
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("nav", { className: scrolled ? "nav-scrolled" : "", style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      padding: "18px clamp(20px,5vw,60px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "background 300ms ease"
    } }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => nav("Home"), style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 22,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: C.textLight,
      lineHeight: 1
    } }, "JIMMY ", /* @__PURE__ */ import_react.default.createElement("span", { style: { color: C.gold } }, "LIMA")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hide-mobile", style: { display: "flex", gap: 28, alignItems: "center" } }, ["About", "Issues", "Endorsements", "Volunteer", "Contact"].map((p) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: p,
        onClick: () => nav(p),
        style: linkStyle(p),
        onMouseEnter: (e) => {
          if (page !== p) e.target.style.color = C.gold;
        },
        onMouseLeave: (e) => {
          if (page !== p) e.target.style.color = "rgba(255,255,255,0.72)";
        }
      },
      p
    )), /* @__PURE__ */ import_react.default.createElement(
      "a",
      {
        href: DONATE_URL,
        style: {
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: C.gold,
          color: C.canvasDeep,
          padding: "10px 22px",
          borderRadius: 999,
          textDecoration: "none",
          transition: "background 200ms, transform 200ms, box-shadow 200ms"
        },
        onMouseEnter: (e) => {
          e.target.style.background = C.goldLight;
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 6px 20px rgba(242,183,5,0.40)";
        },
        onMouseLeave: (e) => {
          e.target.style.background = C.gold;
          e.target.style.transform = "";
          e.target.style.boxShadow = "";
        }
      },
      "Donate"
    )), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "show-mobile",
        onClick: () => setOpen((o) => !o),
        style: {
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 8,
          alignItems: "center",
          justifyContent: "center"
        },
        "aria-label": open ? "Close menu" : "Open menu"
      },
      /* @__PURE__ */ import_react.default.createElement("svg", { width: "24", height: "18", viewBox: "0 0 24 18", fill: "none" }, open ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("line", { x1: "2", y1: "2", x2: "22", y2: "16", stroke: "white", strokeWidth: "2.2", strokeLinecap: "round" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "22", y1: "2", x2: "2", y2: "16", stroke: "white", strokeWidth: "2.2", strokeLinecap: "round" })) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("line", { x1: "0", y1: "2", x2: "24", y2: "2", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "0", y1: "9", x2: "24", y2: "9", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "0", y1: "16", x2: "24", y2: "16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })))
    )), open && /* @__PURE__ */ import_react.default.createElement("div", { style: {
      position: "fixed",
      inset: 0,
      zIndex: 190,
      background: `linear-gradient(150deg, ${C.canvasDeep} 0%, ${C.canvas} 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4
    } }, PAGES.map((p, i) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: p,
        onClick: () => nav(p),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(44px,11vw,80px)",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: page === p ? C.gold : C.textLight,
          lineHeight: 1.1,
          padding: "4px 16px",
          animation: `word-rise 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms both`,
          transition: "color 180ms"
        },
        onMouseEnter: (e) => {
          e.target.style.color = C.gold;
        },
        onMouseLeave: (e) => {
          e.target.style.color = page === p ? C.gold : C.textLight;
        }
      },
      p
    ))));
  }
  function Hero({ go }) {
    const canvasRef = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      const canvas = canvasRef.current;
      const THREE = window.THREE;
      if (!canvas || !THREE || window.innerWidth < 600) return;
      const W = window.innerWidth, H = window.innerHeight;
      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(60, W / H, 0.1, 1e3);
      cam.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(W, H);
      const COUNT = window.innerWidth < 1024 ? 400 : 900;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 15906565, size: 0.042, transparent: true, opacity: 0 });
      const pts = new THREE.Points(geo, mat);
      scene.add(pts);
      let opacity = 0;
      const fadeTimer = setInterval(() => {
        opacity = Math.min(opacity + 0.015, 0.7);
        mat.opacity = opacity;
        if (opacity >= 0.7) clearInterval(fadeTimer);
      }, 32);
      let rafId = 0, paused = false;
      const tick = () => {
        if (paused) return;
        rafId = requestAnimationFrame(tick);
        pts.rotation.y += 45e-5;
        pts.rotation.x += 18e-5;
        renderer.render(scene, cam);
      };
      tick();
      const heroEl = canvas.parentElement;
      const obs = new IntersectionObserver(([e]) => {
        paused = !e.isIntersecting;
        if (!paused) tick();
      }, { threshold: 0 });
      obs.observe(heroEl);
      const onResize = () => {
        cam.aspect = window.innerWidth / window.innerHeight;
        cam.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(rafId);
        clearInterval(fadeTimer);
        obs.disconnect();
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
      };
    }, []);
    return /* @__PURE__ */ import_react.default.createElement("section", { style: {
      position: "relative",
      minHeight: "100svh",
      background: `
        radial-gradient(ellipse at 38% 52%, rgba(38,25,209,0.38) 0%, transparent 62%),
        radial-gradient(ellipse at 80% 20%, rgba(46,120,199,0.20) 0%, transparent 50%),
        linear-gradient(160deg, ${C.canvasDeep} 0%, ${C.canvas} 55%, ${C.canvasMid} 100%)
      `,
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    } }, /* @__PURE__ */ import_react.default.createElement("canvas", { ref: canvasRef, style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    } }), /* @__PURE__ */ import_react.default.createElement("div", { style: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: 1280,
      margin: "0 auto",
      padding: "clamp(108px,14vh,170px) clamp(20px,5vw,80px) clamp(70px,10vh,110px)"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": true, style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    } }, /* @__PURE__ */ import_react.default.createElement(StarRing, { size: 32 }), /* @__PURE__ */ import_react.default.createElement("span", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.gold
    } }, "West Covina City Council \xB7 District 5")), /* @__PURE__ */ import_react.default.createElement("h1", { style: { margin: "0 0 20px", lineHeight: 0.88 } }, ["JIMMY", "LIMA"].map((word, i) => /* @__PURE__ */ import_react.default.createElement("span", { key: word, style: { display: "block", overflow: "hidden", lineHeight: 0.92 } }, /* @__PURE__ */ import_react.default.createElement("span", { style: {
      display: "block",
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(80px,16vw,182px)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      background: `linear-gradient(135deg, ${C.gold} 0%, #E08A3C 52%, ${C.gold} 100%)`,
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: `word-rise 0.95s cubic-bezier(0.16,1,0.3,1) ${1.5 + i * 0.28}s both,
                             gradient-flow 5s ease ${2.6}s infinite`
    } }, word)))), /* @__PURE__ */ import_react.default.createElement("p", { "data-reveal": true, "data-delay": "2.2", style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: "clamp(17px,2.2vw,24px)",
      fontStyle: "italic",
      color: "rgba(255,255,255,0.78)",
      maxWidth: 520,
      margin: "0 0 40px",
      lineHeight: 1.6
    } }, "Fighting for every family in West Covina \u2014 because our community deserves better."), /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": true, "data-delay": "2.5", style: { display: "flex", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ import_react.default.createElement(MagnetBtn, { spark: true, style: { fontSize: 16, padding: "16px 36px" }, onClick: () => go("Volunteer") }, "Join the Campaign"), /* @__PURE__ */ import_react.default.createElement(GhostBtn, { onClick: () => go("Issues") }, "See the Platform \u2192"))), /* @__PURE__ */ import_react.default.createElement("div", { style: {
      position: "absolute",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      animation: "fade-in 0.8s ease 3.4s both"
    } }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 10,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "rgba(255,255,255,0.35)",
      margin: 0
    } }, "Scroll"), /* @__PURE__ */ import_react.default.createElement("div", { style: {
      width: 20,
      height: 28,
      border: "1.5px solid rgba(255,255,255,0.30)",
      borderRadius: 10,
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: C.gold,
      position: "absolute",
      left: "50%",
      top: 5,
      transform: "translateX(-50%)",
      animation: "scroll-bob 1.8s ease-in-out infinite"
    } }))));
  }
  var ISSUES_PREVIEW = [
    { tag: "Housing", title: "Affordable Housing", body: "Pushing for zoning reform and community-benefit agreements to keep long-time West Covina residents in their homes." },
    { tag: "Education", title: "Better Schools", body: "Investing in after-school programs, mental health counselors, and modernizing aging school facilities across District 5." },
    { tag: "Safety", title: "Public Safety", body: "Community-centered safety that builds real trust between residents and first responders \u2014 not just more enforcement." }
  ];
  var ENDORSEMENTS_HOME = [
    { name: "Maria Gonzalez", role: "Parent & PTA President", quote: "Jimmy actually listens. He came to our school meeting and stayed two hours answering questions. That's the councilmember we need." },
    { name: "Ray Torres", role: "Small Business Owner", quote: "Finally someone who understands what it takes to run a business in West Covina. Jimmy has my vote and my sign." },
    { name: "Dr. Angela Kim", role: "Family Physician, WC", quote: "Healthcare access in District 5 is a crisis. Jimmy's the only candidate with a real plan to address it." }
  ];
  function Home({ go }) {
    useReveal();
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(Hero, { go }), /* @__PURE__ */ import_react.default.createElement(Marquee, null), /* @__PURE__ */ import_react.default.createElement("section", { style: { padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.canvas } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement(SHead, { eyebrow: "Platform", title: "What Jimmy Stands For" }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginBottom: 36 } }, ISSUES_PREVIEW.map((item, i) => /* @__PURE__ */ import_react.default.createElement(SpotCard, { key: item.title }, /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": true, "data-delay": `${i * 0.1}` }, /* @__PURE__ */ import_react.default.createElement("span", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.gold,
      background: "rgba(242,183,5,0.14)",
      border: "1px solid rgba(242,183,5,0.28)",
      padding: "3px 10px",
      borderRadius: 999,
      display: "inline-block",
      marginBottom: 18
    } }, item.tag), /* @__PURE__ */ import_react.default.createElement("h3", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 28,
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.textLight,
      margin: "0 0 12px",
      letterSpacing: "0.01em"
    } }, item.title), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 16,
      lineHeight: 1.7,
      color: C.textMuted,
      margin: 0
    } }, item.body))))), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => go("Issues"),
        style: {
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: "transparent",
          color: C.gold,
          border: `1.5px solid ${C.gold}`,
          padding: "11px 26px",
          borderRadius: 999,
          cursor: "pointer",
          transition: "background 200ms"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(242,183,5,0.12)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "transparent";
        }
      },
      "Full Platform \u2192"
    ))), /* @__PURE__ */ import_react.default.createElement("section", { style: { padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.light } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.canvas,
      margin: "0 0 10px"
    } }, "About Jimmy"), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 18 } }), /* @__PURE__ */ import_react.default.createElement("h2", { "data-blur": true, style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(34px,5vw,64px)",
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.textDark,
      lineHeight: 1,
      margin: "0 0 24px"
    } }, "Rooted in West Covina"), /* @__PURE__ */ import_react.default.createElement("p", { "data-reveal": true, style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 18,
      lineHeight: 1.74,
      color: "#3A4A5C",
      margin: "0 0 16px"
    } }, "Jimmy Lima was born and raised in West Covina. He knows the streets, the schools, and the families that make our city strong. [PLACEHOLDER \u2014 add Jimmy's real bio here.]"), /* @__PURE__ */ import_react.default.createElement("p", { "data-reveal": true, "data-delay": "0.12", style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 18,
      lineHeight: 1.74,
      color: "#3A4A5C",
      margin: "0 0 36px"
    } }, "With deep roots in community organizing and a commitment to District 5, Jimmy is ready to be the voice our neighborhood needs at City Hall."), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => go("About"),
        style: {
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: C.canvas,
          color: C.textLight,
          padding: "14px 30px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          transition: "background 200ms"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = C.canvasMid;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = C.canvas;
        }
      },
      "Meet Jimmy \u2192"
    )), /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": "scale", style: { borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(11,31,79,0.16)", aspectRatio: "4/5" } }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: CANDIDATE_PHOTO,
        alt: "Jimmy Lima",
        style: { width: "100%", height: "100%", objectFit: "cover" },
        onError: (e) => {
          const el = e.target;
          el.style.background = `linear-gradient(135deg, ${C.canvas}, ${C.canvasMid})`;
          el.style.minHeight = "400px";
        }
      }
    )))), /* @__PURE__ */ import_react.default.createElement("section", { style: { padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.canvasMid } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement(SHead, { eyebrow: "Community", title: "Standing With Jimmy" }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginBottom: 36 } }, ENDORSEMENTS_HOME.map((e, i) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        key: e.name,
        "data-reveal": true,
        "data-delay": `${i * 0.1}`,
        style: {
          background: C.glass,
          border: `1px solid ${C.glassBorder}`,
          borderRadius: 18,
          padding: "28px 26px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 250ms"
        },
        onMouseEnter: (el) => el.currentTarget.style.borderColor = "rgba(242,183,5,0.35)",
        onMouseLeave: (el) => el.currentTarget.style.borderColor = C.glassBorder
      },
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'IBM Plex Serif', serif",
        fontStyle: "italic",
        fontSize: 16,
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.82)",
        margin: "0 0 22px"
      } }, '"', e.quote, '"'),
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 17,
        fontWeight: 700,
        textTransform: "uppercase",
        color: C.gold,
        margin: "0 0 3px"
      } }, e.name),
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        color: "rgba(255,255,255,0.45)",
        margin: 0
      } }, e.role),
      /* @__PURE__ */ import_react.default.createElement("span", { style: {
        position: "absolute",
        top: 14,
        right: 20,
        fontFamily: "Georgia",
        fontSize: 64,
        lineHeight: 1,
        color: "rgba(242,183,5,0.12)"
      } }, '"')
    ))), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => go("Endorsements"),
        style: {
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: "transparent",
          color: C.gold,
          border: `1.5px solid ${C.gold}`,
          padding: "11px 26px",
          borderRadius: 999,
          cursor: "pointer",
          transition: "background 200ms"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(242,183,5,0.12)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "transparent";
        }
      },
      "All Endorsements \u2192"
    ))), /* @__PURE__ */ import_react.default.createElement("section", { style: {
      padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)",
      background: C.canvas,
      textAlign: "center"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement(StarRing, { size: 60 })), /* @__PURE__ */ import_react.default.createElement("h2", { "data-blur": true, style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(44px,8vw,88px)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      color: C.textLight,
      lineHeight: 1,
      margin: "0 0 16px"
    } }, "Together,", /* @__PURE__ */ import_react.default.createElement("br", null), "We Win"), /* @__PURE__ */ import_react.default.createElement("p", { "data-reveal": true, style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontStyle: "italic",
      fontSize: 20,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.70)",
      margin: "0 0 40px"
    } }, "Every door knocked, every call made, every sign planted \u2014 it adds up. Join the movement for a better West Covina."), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" } }, /* @__PURE__ */ import_react.default.createElement(MagnetBtn, { spark: true, style: { background: C.salmon, color: "#fff", fontSize: 16, padding: "16px 36px" }, onClick: () => go("Volunteer") }, "Volunteer Now"), /* @__PURE__ */ import_react.default.createElement(GhostBtn, { onClick: () => go("Contact") }, "Get in Touch")))));
  }
  function PageShell({ eyebrow, title, children, lightBody = false }) {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("section", { style: {
      background: C.canvas,
      padding: "clamp(106px,14vh,168px) clamp(20px,5vw,80px) clamp(60px,8vh,80px)",
      borderBottom: `1px solid ${C.glassBorder}`
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.gold,
      margin: "0 0 10px"
    } }, eyebrow), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 20 } }), /* @__PURE__ */ import_react.default.createElement("h1", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(48px,8vw,100px)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      lineHeight: 0.9,
      color: C.textLight,
      margin: 0,
      animation: "word-rise 0.95s cubic-bezier(0.16,1,0.3,1) 0.08s both"
    } }, title))), /* @__PURE__ */ import_react.default.createElement("section", { style: {
      background: lightBody ? C.light : C.canvas,
      padding: "clamp(60px,8vh,100px) clamp(20px,5vw,80px)"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, children)));
  }
  function About() {
    useReveal();
    return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "About", title: "Meet Jimmy Lima", lightBody: true }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "start", marginBottom: 80 } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h2", { "data-blur": true, style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(28px,3.5vw,44px)",
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.textDark,
      lineHeight: 1.1,
      margin: "0 0 28px"
    } }, "A Lifelong West Covina Resident"), [
      "Jimmy Lima grew up in District 5, attending local schools and watching the neighborhood he loves face growing challenges around housing affordability, school funding, and public safety. [PLACEHOLDER \u2014 add Jimmy's real story here.]",
      "After years of community organizing \u2014 leading neighborhood clean-ups, attending City Council meetings, and connecting families with city resources \u2014 Jimmy decided the time had come to take that dedication into the council chamber itself.",
      "His campaign is powered entirely by small donors and neighborhood volunteers. No PAC money. No developer donations. Just the people of West Covina standing up for their community."
    ].map((p, i) => /* @__PURE__ */ import_react.default.createElement("p", { key: i, "data-reveal": true, "data-delay": `${i * 0.12}`, style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 18,
      lineHeight: 1.76,
      color: "#3A4A5C",
      margin: "0 0 20px"
    } }, p))), /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": "scale", style: { borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(11,31,79,0.14)", aspectRatio: "3/4" } }, /* @__PURE__ */ import_react.default.createElement("img", { src: CANDIDATE_PHOTO, alt: "Jimmy Lima", style: { width: "100%", height: "100%", objectFit: "cover" } }))), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: C.canvas, borderRadius: 24, padding: "clamp(36px,5vw,60px)" } }, /* @__PURE__ */ import_react.default.createElement(SHead, { eyebrow: "Values", title: "What Drives Jimmy" }), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 } }, [
      { label: "Community First", text: "Every decision at City Hall will be guided by one question: does this make life better for the families of District 5?" },
      { label: "Honest Government", text: "Full transparency in city contracts, open town halls, and a council office that returns every call within 24 hours." },
      { label: "Roots Over Resume", text: "Jimmy isn't a politician. He's a neighbor who's tired of waiting for change and decided to be that change himself." }
    ].map((v, i) => /* @__PURE__ */ import_react.default.createElement(SpotCard, { key: v.label }, /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": true, "data-delay": `${i * 0.12}` }, /* @__PURE__ */ import_react.default.createElement("h3", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 24,
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.gold,
      margin: "0 0 12px"
    } }, v.label), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 16,
      lineHeight: 1.72,
      color: C.textMuted,
      margin: 0
    } }, v.text)))))));
  }
  var ISSUES_ALL = [
    {
      num: "01",
      title: "Affordable Housing",
      tag: "Housing",
      tagColor: C.gold,
      stat: { n: "40%", label: "Rent increase in 5 years" },
      paras: [
        "The housing crisis is pricing out the families who built West Covina. Rents have increased 40% in five years while wages have barely kept pace.",
        "Jimmy will push for community benefit agreements on new developments, expand the city's affordable housing trust fund, and fight against displacement of long-term residents.",
        "He supports renter protections, first-time buyer assistance programs, and transparent zoning processes that actually include community input. [PLACEHOLDER]"
      ]
    },
    {
      num: "02",
      title: "Better Schools",
      tag: "Education",
      tagColor: C.sky,
      stat: { n: "1 in 3", label: "Students qualify for free lunch" },
      paras: [
        "West Covina's schools deserve more than aging buildings and underpaid educators. Every child in District 5 deserves a world-class education \u2014 full stop.",
        "Jimmy will prioritize city funding for after-school programs, mental health counselors in every school, and modernizing facilities that haven't been updated in decades.",
        "He'll work with WCUSD to ensure our schools reflect the diversity of our community and that no child is left behind due to zip code. [PLACEHOLDER]"
      ]
    },
    {
      num: "03",
      title: "Public Safety",
      tag: "Safety",
      tagColor: C.salmon,
      stat: { n: "28%", label: "Rise in property crime since 2020" },
      paras: [
        "Safety is a right, not a privilege. Every family in District 5 should feel secure in their home, on their streets, and in their parks.",
        "Jimmy believes in community-centered public safety \u2014 investing in mental health crisis response, neighborhood watch coordination, and youth programming.",
        "He will ensure our first responders have the resources they need while building the trust between law enforcement and residents that makes communities truly safe. [PLACEHOLDER]"
      ]
    },
    {
      num: "04",
      title: "Local Economy",
      tag: "Economy",
      tagColor: "#9FE870",
      stat: { n: "2,400+", label: "Small businesses in West Covina" },
      paras: [
        "West Covina's small businesses are the backbone of District 5. They employ our neighbors, serve our community, and define the character of our streets.",
        "Jimmy will fight for streamlined permitting, a dedicated small business liaison at City Hall, and local hiring preferences on city contracts.",
        "He also supports workforce development programs that connect residents with living-wage careers in the trades, healthcare, and tech. [PLACEHOLDER]"
      ]
    },
    {
      num: "05",
      title: "Clean Environment",
      tag: "Environment",
      tagColor: "#5FF0CC",
      stat: { n: "18", label: "Parks in District 5 needing upgrades" },
      paras: [
        "Our parks, air quality, and green spaces matter \u2014 especially in communities closest to industrial corridors.",
        "Jimmy will champion tree-planting programs, push for expanded EV charging infrastructure, and fight to clean up contaminated sites that have been ignored for too long.",
        "A greener West Covina is a healthier West Covina. Environmental justice will be part of every land-use decision made in District 5. [PLACEHOLDER]"
      ]
    }
  ];
  function Issues() {
    const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
    const itemRefs = (0, import_react.useRef)([]);
    (0, import_react.useEffect)(() => {
      const obs = [];
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const o = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) setActiveIdx(i);
        }, { threshold: 0.45, rootMargin: "-15% 0px -15% 0px" });
        o.observe(el);
        obs.push(o);
      });
      return () => obs.forEach((o) => o.disconnect());
    }, []);
    const active = ISSUES_ALL[activeIdx];
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("section", { style: {
      background: C.canvas,
      padding: "clamp(106px,14vh,168px) clamp(20px,5vw,80px) clamp(60px,8vh,80px)",
      borderBottom: `1px solid ${C.glassBorder}`
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: C.gold,
      margin: "0 0 10px"
    } }, "Issues / Platform"), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 20 } }), /* @__PURE__ */ import_react.default.createElement("h1", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(48px,8vw,100px)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      lineHeight: 0.9,
      color: C.textLight,
      margin: 0,
      animation: "word-rise 0.95s cubic-bezier(0.16,1,0.3,1) 0.08s both"
    } }, "Where Jimmy Stands"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "issues-grid" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "issues-pin" }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 10,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "rgba(255,255,255,0.35)",
      margin: "0 0 20px"
    } }, "Scroll to explore"), /* @__PURE__ */ import_react.default.createElement("span", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(64px,9vw,116px)",
      fontWeight: 900,
      lineHeight: 1,
      background: `linear-gradient(135deg, ${C.gold}, #E08A3C)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "block",
      transition: "all 0.45s ease"
    } }, active.num), /* @__PURE__ */ import_react.default.createElement("h2", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(28px,3.5vw,50px)",
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.textLight,
      lineHeight: 1,
      margin: "6px 0 20px",
      transition: "all 0.45s ease"
    } }, active.title), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 22 } }), /* @__PURE__ */ import_react.default.createElement("div", { style: {
      background: "rgba(242,183,5,0.10)",
      border: "1px solid rgba(242,183,5,0.25)",
      borderRadius: 12,
      padding: "14px 18px",
      transition: "all 0.45s ease"
    } }, /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 34,
      fontWeight: 800,
      color: C.gold,
      lineHeight: 1,
      margin: "0 0 4px"
    } }, active.stat.n), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      color: "rgba(255,255,255,0.50)",
      margin: 0
    } }, active.stat.label)), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", gap: 8, marginTop: 28 } }, ISSUES_ALL.map((_, i) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        key: i,
        onClick: () => itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" }),
        style: {
          width: i === activeIdx ? 24 : 8,
          height: 8,
          borderRadius: 999,
          background: i === activeIdx ? C.gold : "rgba(255,255,255,0.22)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }
      }
    )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "issues-scroll", style: { background: C.canvas } }, ISSUES_ALL.map((issue, i) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        key: issue.num,
        ref: (el) => {
          itemRefs.current[i] = el;
        },
        className: `issue-item${i === activeIdx ? " is-active" : ""}`
      },
      /* @__PURE__ */ import_react.default.createElement("span", { style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.10em",
        color: issue.tagColor,
        background: `${issue.tagColor}22`,
        border: `1px solid ${issue.tagColor}44`,
        padding: "3px 10px",
        borderRadius: 999,
        display: "inline-block",
        marginBottom: 20
      } }, issue.tag),
      issue.paras.map((p, j) => /* @__PURE__ */ import_react.default.createElement("p", { key: j, style: {
        fontFamily: "'IBM Plex Serif', serif",
        fontSize: 18,
        lineHeight: 1.78,
        color: "rgba(255,255,255,0.82)",
        margin: "0 0 20px"
      } }, p))
    )))));
  }
  var ALL_ENDORSEMENTS = [
    { name: "Maria Gonzalez", role: "Parent & PTA President", quote: "Jimmy actually listens. He came to our school meeting and stayed two hours answering questions. That's the councilmember we need." },
    { name: "Ray Torres", role: "Small Business Owner", quote: "Finally someone who understands what it takes to run a business in West Covina. Jimmy has my vote and my sign." },
    { name: "Dr. Angela Kim", role: "Family Physician, WC", quote: "Healthcare access in District 5 is a crisis. Jimmy's the only candidate with a real plan to address it." },
    { name: "Pastor James W.", role: "First Baptist Church, WC", quote: "A man of character and integrity. West Covina needs Jimmy Lima on the City Council. [PLACEHOLDER]" },
    { name: "Sofia Martinez", role: "Retired School Teacher", quote: "After 30 years in the classroom, I know which candidates actually care about kids. Jimmy does. [PLACEHOLDER]" },
    { name: "Carlos Reyes", role: "IBEW Local 11", quote: "Jimmy stands with working families. He's earned the support of our local and our members. [PLACEHOLDER]" }
  ];
  var ORGS = [
    "West Covina Teachers Association [PLACEHOLDER]",
    "San Gabriel Valley Young Democrats [PLACEHOLDER]",
    "WC Small Business Alliance [PLACEHOLDER]",
    "District 5 Neighborhood Watch [PLACEHOLDER]"
  ];
  function Endorsements() {
    useReveal();
    return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "Endorsements & Community", title: "Standing With Jimmy" }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20, marginBottom: 64 } }, ALL_ENDORSEMENTS.map((e, i) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        key: e.name,
        "data-reveal": true,
        "data-delay": `${i * 0.08}`,
        style: {
          background: C.glass,
          border: `1px solid ${C.glassBorder}`,
          borderRadius: 18,
          padding: "28px 26px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 250ms ease"
        },
        onMouseEnter: (el) => el.currentTarget.style.borderColor = "rgba(242,183,5,0.35)",
        onMouseLeave: (el) => el.currentTarget.style.borderColor = C.glassBorder
      },
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'IBM Plex Serif', serif",
        fontStyle: "italic",
        fontSize: 16,
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.82)",
        margin: "0 0 22px"
      } }, '"', e.quote, '"'),
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 17,
        fontWeight: 700,
        textTransform: "uppercase",
        color: C.gold,
        margin: "0 0 3px"
      } }, e.name),
      /* @__PURE__ */ import_react.default.createElement("p", { style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        color: "rgba(255,255,255,0.45)",
        margin: 0
      } }, e.role),
      /* @__PURE__ */ import_react.default.createElement("span", { style: {
        position: "absolute",
        top: 14,
        right: 20,
        fontFamily: "Georgia",
        fontSize: 60,
        lineHeight: 1,
        color: "rgba(242,183,5,0.12)"
      } }, '"')
    ))), /* @__PURE__ */ import_react.default.createElement("div", { style: { background: C.canvasMid, borderRadius: 20, padding: "clamp(32px,5vw,52px)" } }, /* @__PURE__ */ import_react.default.createElement("h3", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 28,
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.gold,
      margin: "0 0 22px"
    } }, "Organizational Endorsements"), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 } }, ORGS.map((org) => /* @__PURE__ */ import_react.default.createElement("div", { key: org, style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: C.glass,
      border: `1px solid ${C.glassBorder}`,
      borderRadius: 10,
      padding: "13px 16px"
    } }, /* @__PURE__ */ import_react.default.createElement("span", { style: { color: C.gold, fontSize: 14, lineHeight: 1 } }, "\u2605"), /* @__PURE__ */ import_react.default.createElement("span", { style: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.75)" } }, org))))));
  }
  function Volunteer() {
    const [done, setDone] = (0, import_react.useState)(false);
    const [vals, setVals] = (0, import_react.useState)({ name: "", email: "", phone: "", zip: "", interest: "Knock on doors" });
    useReveal();
    const submit = (e) => {
      e.preventDefault();
      setDone(true);
    };
    if (done) return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "Volunteer", title: "Thank You!" }, /* @__PURE__ */ import_react.default.createElement("div", { style: { textAlign: "center", padding: "40px 0" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: 20 } }, /* @__PURE__ */ import_react.default.createElement(StarRing, { size: 72 })), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", fontSize: 22, color: C.textMuted, maxWidth: 440, margin: "0 auto", lineHeight: 1.65 } }, "Welcome to the campaign. We'll be in touch soon. Thank you for fighting for West Covina.")));
    const fld = {
      fontFamily: "'Inter', sans-serif",
      fontSize: 15,
      background: "rgba(255,255,255,0.08)",
      border: `1.5px solid ${C.glassBorder}`,
      color: C.textLight,
      padding: "12px 16px",
      borderRadius: 8,
      width: "100%",
      outline: "none",
      transition: "border-color 200ms, box-shadow 200ms"
    };
    const lbl = {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: "rgba(255,255,255,0.50)",
      display: "block",
      marginBottom: 6
    };
    const focus = (e) => {
      e.target.style.borderColor = C.gold;
      e.target.style.boxShadow = "0 0 0 3px rgba(242,183,5,0.18)";
    };
    const blur = (e) => {
      e.target.style.borderColor = C.glassBorder;
      e.target.style.boxShadow = "";
    };
    return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "Volunteer / Get Involved", title: "Join the Campaign" }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64 } }, /* @__PURE__ */ import_react.default.createElement("form", { onSubmit: submit, "data-reveal": true, style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Name *"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        required: true,
        value: vals.name,
        onChange: (e) => setVals((v) => ({ ...v, name: e.target.value })),
        placeholder: "Your name",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Zip Code"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        value: vals.zip,
        onChange: (e) => setVals((v) => ({ ...v, zip: e.target.value })),
        placeholder: "91790",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Email *"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        required: true,
        type: "email",
        value: vals.email,
        onChange: (e) => setVals((v) => ({ ...v, email: e.target.value })),
        placeholder: "you@example.com",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Phone (optional)"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        type: "tel",
        value: vals.phone,
        onChange: (e) => setVals((v) => ({ ...v, phone: e.target.value })),
        placeholder: "(626) 555-0100",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "How would you like to help?"), /* @__PURE__ */ import_react.default.createElement(
      "select",
      {
        value: vals.interest,
        onChange: (e) => setVals((v) => ({ ...v, interest: e.target.value })),
        style: { ...fld, cursor: "pointer" },
        onFocus: focus,
        onBlur: blur
      },
      ["Knock on doors", "Make phone calls", "Host a house party", "Put up yard signs", "Donate", "Other"].map((o) => /* @__PURE__ */ import_react.default.createElement("option", { key: o, style: { background: C.canvas } }, o))
    )), /* @__PURE__ */ import_react.default.createElement(MagnetBtn, { spark: true, style: { alignSelf: "flex-start", fontSize: 16, padding: "16px 34px" } }, "Count Me In \u2192")), /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": "right" }, /* @__PURE__ */ import_react.default.createElement("h3", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 26,
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.gold,
      margin: "0 0 24px"
    } }, "Ways to Help"), [
      { title: "Knock Doors", text: "Join weekend canvasses and meet your neighbors across District 5. Training provided." },
      { title: "Phone Bank", text: "Call voters from home. Thursdays 6\u20138 pm via Zoom. [PLACEHOLDER \u2014 add link]" },
      { title: "Donate", text: "Small donations fund yard signs, mailers, and events. Every dollar stays in West Covina." },
      { title: "Spread the Word", text: "Share on social media. Tag #JimmyLima and #WestCovina." }
    ].map((item) => /* @__PURE__ */ import_react.default.createElement("div", { key: item.title, style: { borderLeft: `3px solid ${C.gold}`, paddingLeft: 20, marginBottom: 26 } }, /* @__PURE__ */ import_react.default.createElement("h4", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 19,
      fontWeight: 700,
      textTransform: "uppercase",
      color: C.textLight,
      margin: "0 0 5px"
    } }, item.title), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontFamily: "'IBM Plex Serif', serif",
      fontSize: 15,
      lineHeight: 1.68,
      color: "rgba(255,255,255,0.65)",
      margin: 0
    } }, item.text))))));
  }
  function Contact() {
    const [done, setDone] = (0, import_react.useState)(false);
    const [vals, setVals] = (0, import_react.useState)({ name: "", email: "", message: "" });
    useReveal();
    const submit = (e) => {
      e.preventDefault();
      setDone(true);
    };
    if (done) return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "Contact", title: "Message Sent" }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", fontSize: 22, color: C.textMuted, lineHeight: 1.65, maxWidth: 480 } }, "Thanks for reaching out. The campaign will get back to you within 1 business day."));
    const fld = {
      fontFamily: "'Inter', sans-serif",
      fontSize: 15,
      background: "rgba(255,255,255,0.08)",
      border: `1.5px solid ${C.glassBorder}`,
      color: C.textLight,
      padding: "12px 16px",
      borderRadius: 8,
      width: "100%",
      outline: "none",
      transition: "border-color 200ms, box-shadow 200ms"
    };
    const lbl = {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.10em",
      color: "rgba(255,255,255,0.50)",
      display: "block",
      marginBottom: 6
    };
    const focus = (e) => {
      e.target.style.borderColor = C.gold;
      e.target.style.boxShadow = "0 0 0 3px rgba(242,183,5,0.18)";
    };
    const blur = (e) => {
      e.target.style.borderColor = C.glassBorder;
      e.target.style.boxShadow = "";
    };
    return /* @__PURE__ */ import_react.default.createElement(PageShell, { eyebrow: "Contact", title: "Get in Touch" }, /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64 } }, /* @__PURE__ */ import_react.default.createElement("form", { onSubmit: submit, "data-reveal": true, style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Your Name *"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        required: true,
        value: vals.name,
        onChange: (e) => setVals((v) => ({ ...v, name: e.target.value })),
        placeholder: "Full name",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Email Address *"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        required: true,
        type: "email",
        value: vals.email,
        onChange: (e) => setVals((v) => ({ ...v, email: e.target.value })),
        placeholder: "you@example.com",
        style: fld,
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { style: lbl }, "Message *"), /* @__PURE__ */ import_react.default.createElement(
      "textarea",
      {
        required: true,
        value: vals.message,
        onChange: (e) => setVals((v) => ({ ...v, message: e.target.value })),
        placeholder: "How can we help?",
        rows: 5,
        style: { ...fld, resize: "vertical", minHeight: 120 },
        onFocus: focus,
        onBlur: blur
      }
    )), /* @__PURE__ */ import_react.default.createElement(MagnetBtn, { spark: true, style: { alignSelf: "flex-start", fontSize: 16, padding: "16px 34px" } }, "Send Message \u2192")), /* @__PURE__ */ import_react.default.createElement("div", { "data-reveal": "right" }, /* @__PURE__ */ import_react.default.createElement("h3", { style: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 26,
      fontWeight: 800,
      textTransform: "uppercase",
      color: C.gold,
      margin: "0 0 28px"
    } }, "Campaign Info"), [
      { label: "Email", value: "hello@jimmylima.com [PLACEHOLDER]" },
      { label: "Phone", value: "(626) 555-0100 [PLACEHOLDER]" },
      { label: "District", value: "West Covina City Council, District 5" }
    ].map((item) => /* @__PURE__ */ import_react.default.createElement("div", { key: item.label, style: { marginBottom: 22 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.40)", margin: "0 0 4px" } }, item.label), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'IBM Plex Serif', serif", fontSize: 17, color: C.textLight, margin: 0 } }, item.value))), /* @__PURE__ */ import_react.default.createElement("div", { style: { marginTop: 36 } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.40)", margin: "0 0 14px" } }, "Follow Along"), /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 10 } }, ["Instagram", "Facebook", "Twitter/X", "TikTok"].map((s) => /* @__PURE__ */ import_react.default.createElement("span", { key: s, style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      fontWeight: 600,
      color: C.gold,
      border: `1px solid rgba(242,183,5,0.35)`,
      padding: "6px 13px",
      borderRadius: 999,
      cursor: "pointer"
    } }, "@jimmylima \xB7 ", s, " [PH]")))))));
  }
  function Footer({ go }) {
    return /* @__PURE__ */ import_react.default.createElement("footer", { style: {
      background: C.canvasDeep,
      borderTop: `1px solid ${C.glassBorder}`,
      padding: "clamp(40px,6vw,64px) clamp(20px,5vw,80px)"
    } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40 } }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => go("Home"), style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 26,
      fontWeight: 900,
      textTransform: "uppercase",
      color: C.textLight,
      marginBottom: 6,
      display: "block"
    } }, "JIMMY ", /* @__PURE__ */ import_react.default.createElement("span", { style: { color: C.gold } }, "LIMA")), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.40)", margin: "0 0 20px" } }, "West Covina City Council \xB7 District 5"), /* @__PURE__ */ import_react.default.createElement(StarRing, { size: 44 })), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.35)", margin: "0 0 14px" } }, "Navigate"), PAGES.map((p) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: p,
        onClick: () => go(p),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          display: "block",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 18,
          fontWeight: 600,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.58)",
          transition: "color 180ms"
        },
        onMouseEnter: (e) => {
          e.target.style.color = C.gold;
        },
        onMouseLeave: (e) => {
          e.target.style.color = "rgba(255,255,255,0.58)";
        }
      },
      p
    ))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.30)", lineHeight: 1.75, margin: 0 } }, "Paid for by Jimmy Lima for West Covina City Council, District 5. Treasurer: [PLACEHOLDER \u2014 name & address]. Not authorized by any candidate or candidate's committee."), /* @__PURE__ */ import_react.default.createElement("p", { style: { fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.18)", margin: "16px 0 0" } }, "Motion effects derived from", " ", /* @__PURE__ */ import_react.default.createElement("a", { href: "https://github.com/DavidHDev/vue-bits", style: { color: "rgba(255,255,255,0.28)" } }, "vue-bits"), " ", "by DavidHDev (MIT)"))));
  }
  function App() {
    const [page, setPage] = (0, import_react.useState)("Home");
    const go = (0, import_react.useCallback)((p) => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setPage(p);
    }, []);
    (0, import_react.useEffect)(() => {
      document.title = page === "Home" ? "Jimmy Lima \u2014 West Covina City Council, District 5" : `${page} \u2014 Jimmy Lima`;
    }, [page]);
    const Pages = {
      Home,
      About,
      Issues,
      Endorsements,
      Volunteer,
      Contact
    };
    const Body = Pages[page];
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("style", { dangerouslySetInnerHTML: { __html: GLOBAL_CSS } }), /* @__PURE__ */ import_react.default.createElement(Nav, { page, go }), /* @__PURE__ */ import_react.default.createElement("main", null, /* @__PURE__ */ import_react.default.createElement(Body, { go })), /* @__PURE__ */ import_react.default.createElement(Footer, { go }));
  }
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
