import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-DRAPPDPY.js";

// node_modules/tinyduration/dist/index.js
var require_dist = __commonJS({
  "node_modules/tinyduration/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = exports.parse = exports.MultipleFractionsError = exports.InvalidDurationError = void 0;
    var DEFAULT_PARSE_CONFIG = {
      allowMultipleFractions: true
    };
    var units = [
      { unit: "years", symbol: "Y" },
      { unit: "months", symbol: "M" },
      { unit: "weeks", symbol: "W" },
      { unit: "days", symbol: "D" },
      { unit: "hours", symbol: "H" },
      { unit: "minutes", symbol: "M" },
      { unit: "seconds", symbol: "S" }
    ];
    var r = (name, unit) => `((?<${name}>-?\\d*[\\.,]?\\d+)${unit})?`;
    var durationRegex = new RegExp([
      "(?<negative>-)?P",
      r("years", "Y"),
      r("months", "M"),
      r("weeks", "W"),
      r("days", "D"),
      "(T",
      r("hours", "H"),
      r("minutes", "M"),
      r("seconds", "S"),
      ")?"
      // end optional time
    ].join(""));
    function parseNum(s2) {
      if (s2 === "" || s2 === void 0 || s2 === null) {
        return void 0;
      }
      return parseFloat(s2.replace(",", "."));
    }
    exports.InvalidDurationError = new Error("Invalid duration");
    exports.MultipleFractionsError = new Error("Multiple fractions specified");
    function parse(durationStr, config = DEFAULT_PARSE_CONFIG) {
      const match = durationRegex.exec(durationStr);
      if (!match || !match.groups) {
        throw exports.InvalidDurationError;
      }
      let empty = true;
      let decimalFractionCount = 0;
      const values = {};
      for (const { unit } of units) {
        if (match.groups[unit]) {
          empty = false;
          values[unit] = parseNum(match.groups[unit]);
          if (!config.allowMultipleFractions && !Number.isInteger(values[unit])) {
            decimalFractionCount++;
            if (decimalFractionCount > 1) {
              throw exports.MultipleFractionsError;
            }
          }
        }
      }
      if (empty) {
        throw exports.InvalidDurationError;
      }
      const duration = values;
      if (match.groups.negative) {
        duration.negative = true;
      }
      return duration;
    }
    exports.parse = parse;
    var s = (number, component) => {
      if (!number) {
        return void 0;
      }
      let numberAsString = number.toString();
      const exponentIndex = numberAsString.indexOf("e");
      if (exponentIndex > -1) {
        const magnitude = parseInt(numberAsString.slice(exponentIndex + 2), 10);
        numberAsString = number.toFixed(magnitude + exponentIndex - 2);
      }
      return numberAsString + component;
    };
    function serialize(duration) {
      if (!duration.years && !duration.months && !duration.weeks && !duration.days && !duration.hours && !duration.minutes && !duration.seconds) {
        return "PT0S";
      }
      return [
        duration.negative && "-",
        "P",
        s(duration.years, "Y"),
        s(duration.months, "M"),
        s(duration.weeks, "W"),
        s(duration.days, "D"),
        (duration.hours || duration.minutes || duration.seconds) && "T",
        s(duration.hours, "H"),
        s(duration.minutes, "M"),
        s(duration.seconds, "S")
      ].filter(Boolean).join("");
    }
    exports.serialize = serialize;
  }
});

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNumber.js
function isUntypedNumber(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "number";
}
function createUntypedNumber(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/parseNodeFactoryRegistry.js
var ParseNodeFactoryRegistry = class {
  constructor() {
    this.jsonContentType = "application/json";
    this.contentTypeAssociatedFactories = /* @__PURE__ */ new Map();
  }
  getValidContentType() {
    throw new Error("The registry supports multiple content types. Get the registered factory instead.");
  }
  /**
   * Creates a {@link ParseNode} from the given {@link ArrayBuffer} and content type.
   * @param contentType the content type of the {@link ArrayBuffer}.
   * @param content the {@link ArrayBuffer} to read from.
   * @returns a {@link ParseNode} that can deserialize the given {@link ArrayBuffer}.
   */
  getRootParseNode(contentType, content) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!content) {
      throw new Error("content cannot be undefined or empty");
    }
    const vendorSpecificContentType = contentType.split(";")[0];
    let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
    if (factory) {
      return factory.getRootParseNode(vendorSpecificContentType, content);
    }
    const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
    factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
    if (factory) {
      return factory.getRootParseNode(cleanedContentType, content);
    }
    throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be parsed`);
  }
  /**
   * Registers the default deserializer to the registry.
   * @param type the class of the factory to be registered.
   * @param backingStoreFactory The backing store factory to use.
   */
  registerDefaultDeserializer(type, backingStoreFactory) {
    if (!type)
      throw new Error("Type is required");
    const deserializer = new type(backingStoreFactory);
    this.contentTypeAssociatedFactories.set(deserializer.getValidContentType(), deserializer);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  deserializeFromJson(bufferOrString, factory) {
    return this.deserialize(this.jsonContentType, bufferOrString, factory);
  }
  /**
   * Deserializes a buffer into a collection of parsable object
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized collection of parsable objects
   */
  deserializeCollectionFromJson(bufferOrString, factory) {
    return this.deserializeCollection(this.jsonContentType, bufferOrString, factory);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param contentType the content type to serialize to
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  deserialize(contentType, bufferOrString, factory) {
    if (typeof bufferOrString === "string") {
      bufferOrString = this.getBufferFromString(bufferOrString);
    }
    const reader = this.getParseNode(contentType, bufferOrString, factory);
    return reader.getObjectValue(factory);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param contentType the content type to serialize to
   * @param buffer the value to deserialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  getParseNode(contentType, buffer, factory) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!buffer) {
      throw new Error("buffer cannot be undefined");
    }
    if (!factory) {
      throw new Error("factory cannot be undefined");
    }
    return this.getRootParseNode(contentType, buffer);
  }
  /**
   * Deserializes a buffer into a collection of parsable object
   * @param contentType the content type to serialize to
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized collection of parsable objects
   */
  deserializeCollection(contentType, bufferOrString, factory) {
    if (typeof bufferOrString === "string") {
      bufferOrString = this.getBufferFromString(bufferOrString);
    }
    const reader = this.getParseNode(contentType, bufferOrString, factory);
    return reader.getCollectionOfObjectValues(factory);
  }
  /**
   * Deserializes a buffer into a a collection of parsable object
   * @param value the string to get a buffer from
   * @returns the ArrayBuffer representation of the string
   */
  getBufferFromString(value) {
    const encoder = new TextEncoder();
    return encoder.encode(value).buffer;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/parseNodeProxyFactory.js
var ParseNodeProxyFactory = class {
  getValidContentType() {
    return this._concrete.getValidContentType();
  }
  /**
   * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
   * @param _concrete the concrete factory to wrap
   * @param _onBefore the callback to invoke before the deserialization of any model object.
   * @param _onAfter the callback to invoke after the deserialization of any model object.
   */
  constructor(_concrete, _onBefore, _onAfter) {
    this._concrete = _concrete;
    this._onBefore = _onBefore;
    this._onAfter = _onAfter;
    if (!_concrete) {
      throw new Error("_concrete cannot be undefined");
    }
  }
  getRootParseNode(contentType, content) {
    const node = this._concrete.getRootParseNode(contentType, content);
    const originalBefore = node.onBeforeAssignFieldValues;
    const originalAfter = node.onAfterAssignFieldValues;
    node.onBeforeAssignFieldValues = (value) => {
      if (this._onBefore)
        this._onBefore(value);
      if (originalBefore)
        originalBefore(value);
    };
    node.onAfterAssignFieldValues = (value) => {
      if (this._onAfter)
        this._onAfter(value);
      if (originalAfter)
        originalAfter(value);
    };
    return node;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/serializationWriterFactoryRegistry.js
var SerializationWriterFactoryRegistry = class {
  constructor() {
    this.jsonContentType = "application/json";
    this.contentTypeAssociatedFactories = /* @__PURE__ */ new Map();
  }
  getValidContentType() {
    throw new Error("The registry supports multiple content types. Get the registered factory instead.");
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    const vendorSpecificContentType = contentType.split(";")[0];
    let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
    if (factory) {
      return factory.getSerializationWriter(vendorSpecificContentType);
    }
    const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
    factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
    if (factory) {
      return factory.getSerializationWriter(cleanedContentType);
    }
    throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be serialized`);
  }
  /**
   * Registers the default serializer to the registry.
   * @param type the class of the factory to be registered.
   */
  registerDefaultSerializer(type) {
    if (!type)
      throw new Error("Type is required");
    const serializer = new type();
    this.contentTypeAssociatedFactories.set(serializer.getValidContentType(), serializer);
  }
  /**
   * Serializes a parsable object into a buffer
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a buffer containing the serialized value
   */
  serializeToJson(value, serializationFunction) {
    return this.serialize(this.jsonContentType, value, serializationFunction);
  }
  /**
   * Serializes a parsable object into a string representation
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeToJsonAsString(value, serializationFunction) {
    return this.serializeToString(this.jsonContentType, value, serializationFunction);
  }
  /**
   * Serializes a collection of parsable objects into a buffer
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToJson(values, serializationFunction) {
    return this.serializeCollection(this.jsonContentType, values, serializationFunction);
  }
  /**
   * Serializes a collection of parsable objects into a string representation
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToJsonAsString(values, serializationFunction) {
    return this.serializeCollectionToString(this.jsonContentType, values, serializationFunction);
  }
  /**
   * Serializes a parsable object into a buffer
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a buffer containing the serialized value
   */
  serialize(contentType, value, serializationFunction) {
    const writer = this.getSerializationFactoryWriter(contentType, value, serializationFunction);
    writer.writeObjectValue(void 0, value, serializationFunction);
    return writer.getSerializedContent();
  }
  /**
   * Serializes a parsable object into a string representation
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeToString(contentType, value, serializationFunction) {
    const buffer = this.serialize(contentType, value, serializationFunction);
    return this.getStringValueFromBuffer(buffer);
  }
  /**
   * Serializes a collection of parsable objects into a buffer
   * @param contentType the content type to serialize to
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollection(contentType, values, serializationFunction) {
    const writer = this.getSerializationFactoryWriter(contentType, values, serializationFunction);
    writer.writeCollectionOfObjectValues(void 0, values, serializationFunction);
    return writer.getSerializedContent();
  }
  /**
   * Serializes a collection of parsable objects into a string representation
   * @param contentType the content type to serialize to
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToString(contentType, values, serializationFunction) {
    const buffer = this.serializeCollection(contentType, values, serializationFunction);
    return this.getStringValueFromBuffer(buffer);
  }
  /**
   * Gets a serialization writer for a given content type
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns the serialization writer for the given content type
   */
  getSerializationFactoryWriter(contentType, value, serializationFunction) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!value) {
      throw new Error("value cannot be undefined");
    }
    if (!serializationFunction) {
      throw new Error("serializationFunction cannot be undefined");
    }
    return this.getSerializationWriter(contentType);
  }
  /**
   * Gets a string value from a buffer
   * @param buffer the buffer to get a string from
   * @returns the string representation of the buffer
   */
  getStringValueFromBuffer(buffer) {
    const decoder = new TextDecoder();
    return decoder.decode(buffer);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/serializationWriterProxyFactory.js
var SerializationWriterProxyFactory = class {
  getValidContentType() {
    return this._concrete.getValidContentType();
  }
  /**
   * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
   * @param _concrete the concrete factory to wrap
   * @param _onBefore the callback to invoke before the serialization of any model object.
   * @param _onAfter the callback to invoke after the serialization of any model object.
   * @param _onStart the callback to invoke when the serialization of a model object starts
   */
  constructor(_concrete, _onBefore, _onAfter, _onStart) {
    this._concrete = _concrete;
    this._onBefore = _onBefore;
    this._onAfter = _onAfter;
    this._onStart = _onStart;
    if (!_concrete) {
      throw new Error("_concrete cannot be undefined");
    }
  }
  getSerializationWriter(contentType) {
    const writer = this._concrete.getSerializationWriter(contentType);
    const originalBefore = writer.onBeforeObjectSerialization;
    const originalAfter = writer.onAfterObjectSerialization;
    const originalStart = writer.onStartObjectSerialization;
    writer.onBeforeObjectSerialization = (value) => {
      if (this._onBefore)
        this._onBefore(value);
      if (originalBefore)
        originalBefore(value);
    };
    writer.onAfterObjectSerialization = (value) => {
      if (this._onAfter)
        this._onAfter(value);
      if (originalAfter)
        originalAfter(value);
    };
    writer.onStartObjectSerialization = (value, writer_) => {
      if (this._onStart)
        this._onStart(value, writer_);
      if (originalStart)
        originalStart(value, writer_);
    };
    return writer;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNode.js
var createUntypedNodeFromDiscriminatorValue = (_parseNode) => {
  return deserializeIntoUntypedNode;
};
var isUntypedNode = (node) => {
  const potentialNode = node;
  return (potentialNode === null || potentialNode === void 0 ? void 0 : potentialNode.getValue) !== void 0;
};
var deserializeIntoUntypedNode = (untypedNode = {}) => {
  return {
    value: (_n) => {
      untypedNode.value = null;
    },
    getValue: (_n) => {
      untypedNode.getValue = () => untypedNode.value;
    }
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedArray.js
var isUntypedArray = (node) => {
  const proposedNode = node;
  return proposedNode && proposedNode.value instanceof Array && proposedNode.value.every((item) => isUntypedNode(item));
};
var createUntypedArray = (value) => {
  return {
    value,
    getValue: () => value
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNull.js
function isUntypedNull(node) {
  return node.value === null;
}
function createUntypedNull() {
  return {
    value: null,
    getValue: () => null
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedObject.js
var isUntypedObject = (node) => {
  const proposedNode = node;
  return proposedNode && proposedNode.value instanceof Object && proposedNode.value instanceof Array === false && Object.values(proposedNode.value).every((item) => isUntypedNode(item));
};
var createUntypedObject = (value) => {
  return {
    value,
    getValue: () => value
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedString.js
function isUntypedString(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "string";
}
function createUntypedString(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedBoolean.js
function isUntypedBoolean(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "boolean";
}
function createUntypedBoolean(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreParseNodeFactory.js
var BackingStoreParseNodeFactory = class extends ParseNodeProxyFactory {
  /**
   * Initializes a new instance of the BackingStoreParseNodeFactory class given the concrete implementation.
   * @param concrete the concrete implementation of the ParseNodeFactory
   */
  constructor(concrete) {
    super(concrete, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.initializationCompleted = false;
      }
    }, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.initializationCompleted = true;
      }
    });
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreSerializationWriterProxyFactory.js
var BackingStoreSerializationWriterProxyFactory = class extends SerializationWriterProxyFactory {
  /**
   * Initializes a new instance of the BackingStoreSerializationWriterProxyFactory class given a concrete implementation of SerializationWriterFactory.
   * @param concrete a concrete implementation of SerializationWriterFactory to wrap.
   */
  constructor(concrete) {
    super(concrete, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.returnOnlyChangedValues = true;
      }
    }, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.returnOnlyChangedValues = false;
        backedModel.backingStore.initializationCompleted = true;
      }
    }, (value, writer) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        const keys = backedModel.backingStore.enumerateKeysForValuesChangedToNull();
        for (const key of keys) {
          writer.writeNullValue(key);
        }
      }
    });
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/enumUtils.js
var reverseRecord = (input) => {
  const entries = Object.entries(input).map(([key, value]) => [value, key]);
  return Object.fromEntries(entries);
};
var getEnumValueFromStringValue = (stringValue, originalType) => {
  const reversed = reverseRecord(originalType);
  return originalType[reversed[stringValue]];
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/guidUtils.js
var guidValidator = /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/i;
var parseGuidString = (source) => {
  if (source && guidValidator.test(source)) {
    return source;
  }
  return void 0;
};
var createGuid = () => [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
var gen = (count) => {
  let out = "";
  for (let i = 0; i < count; i++) {
    out += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return out;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/inNodeEnv.js
var inNodeEnv = () => {
  try {
    return !!Buffer && !!process;
  } catch (err) {
    return !(err instanceof ReferenceError);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/inMemoryBackingStore.js
var InMemoryBackingStore = class {
  constructor() {
    this.subscriptions = /* @__PURE__ */ new Map();
    this.store = /* @__PURE__ */ new Map();
    this.returnOnlyChangedValues = false;
    this._initializationCompleted = true;
  }
  get(key) {
    const wrapper = this.store.get(key);
    if (wrapper && (this.returnOnlyChangedValues && wrapper.changed || !this.returnOnlyChangedValues)) {
      return wrapper.value;
    }
    return void 0;
  }
  set(key, value) {
    const oldValueWrapper = this.store.get(key);
    const oldValue = oldValueWrapper === null || oldValueWrapper === void 0 ? void 0 : oldValueWrapper.value;
    if (oldValueWrapper) {
      oldValueWrapper.value = value;
      oldValueWrapper.changed = this.initializationCompleted;
    } else {
      this.store.set(key, {
        changed: this.initializationCompleted,
        value
      });
    }
    this.subscriptions.forEach((sub) => {
      sub(key, oldValue, value);
    });
  }
  enumerate() {
    let filterableArray = [...this.store.entries()];
    if (this.returnOnlyChangedValues) {
      filterableArray = filterableArray.filter(([_, v]) => v.changed);
    }
    return filterableArray.map(([key, value]) => {
      return { key, value };
    });
  }
  enumerateKeysForValuesChangedToNull() {
    const keys = [];
    for (const [key, entry] of this.store) {
      if (entry.changed && !entry.value) {
        keys.push(key);
      }
    }
    return keys;
  }
  subscribe(callback, subscriptionId) {
    if (!callback) {
      throw new Error("callback cannot be undefined");
    }
    subscriptionId = subscriptionId !== null && subscriptionId !== void 0 ? subscriptionId : createGuid();
    this.subscriptions.set(subscriptionId, callback);
    return subscriptionId;
  }
  unsubscribe(subscriptionId) {
    this.subscriptions.delete(subscriptionId);
  }
  clear() {
    this.store.clear();
  }
  set initializationCompleted(value) {
    this._initializationCompleted = value;
    this.store.forEach((v) => {
      v.changed = !value;
    });
  }
  get initializationCompleted() {
    return this._initializationCompleted;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/inMemoryBackingStoreFactory.js
var InMemoryBackingStoreFactory = class {
  createBackingStore() {
    return new InMemoryBackingStore();
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backedModelProxy.js
var createBackedModelProxyHandler = (backingStoreFactory) => {
  const backingStore = backingStoreFactory.createBackingStore();
  const handler = {
    get: (_target, prop) => {
      if (prop === "backingStore") {
        return backingStore;
      }
      return backingStore.get(prop.toString());
    },
    set: (target, prop, value, receiver) => {
      if (prop === "backingStore") {
        console.warn(`BackingStore - Ignoring attempt to set 'backingStore' property`);
        return true;
      }
      Reflect.set(target, prop, value, receiver);
      backingStore.set(prop.toString(), value);
      return true;
    }
  };
  return handler;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreUtils.js
var BackingStoreKey = "backingStoreEnabled";
function isBackingStoreEnabled(fields) {
  return Object.keys(fields).includes(BackingStoreKey);
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiClientBuilder.js
function enableBackingStoreForSerializationWriterFactory(serializationWriterFactoryRegistry, parseNodeFactoryRegistry, original) {
  if (!original)
    throw new Error("Original must be specified");
  let result = original;
  if (original instanceof SerializationWriterFactoryRegistry) {
    enableBackingStoreForSerializationRegistry(original);
  } else {
    result = new BackingStoreSerializationWriterProxyFactory(original);
  }
  enableBackingStoreForSerializationRegistry(serializationWriterFactoryRegistry);
  enableBackingStoreForParseNodeRegistry(parseNodeFactoryRegistry);
  return result;
}
function enableBackingStoreForParseNodeFactory(parseNodeFactoryRegistry, original) {
  if (!original)
    throw new Error("Original must be specified");
  let result = original;
  if (original instanceof ParseNodeFactoryRegistry) {
    enableBackingStoreForParseNodeRegistry(original);
  } else {
    result = new BackingStoreParseNodeFactory(original);
  }
  enableBackingStoreForParseNodeRegistry(parseNodeFactoryRegistry);
  return result;
}
function enableBackingStoreForParseNodeRegistry(registry) {
  for (const [k, v] of registry.contentTypeAssociatedFactories) {
    if (!(v instanceof BackingStoreParseNodeFactory || v instanceof ParseNodeFactoryRegistry)) {
      registry.contentTypeAssociatedFactories.set(k, new BackingStoreParseNodeFactory(v));
    }
  }
}
function enableBackingStoreForSerializationRegistry(registry) {
  for (const [k, v] of registry.contentTypeAssociatedFactories) {
    if (!(v instanceof BackingStoreSerializationWriterProxyFactory || v instanceof SerializationWriterFactoryRegistry)) {
      registry.contentTypeAssociatedFactories.set(k, new BackingStoreSerializationWriterProxyFactory(v));
    }
  }
}

// node_modules/@opentelemetry/api/build/esm/version.js
var VERSION = "1.9.1";

// node_modules/@opentelemetry/api/build/esm/internal/semver.js
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
  const acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  const rejectedVersions = /* @__PURE__ */ new Set();
  const myVersionMatch = ownVersion.match(re);
  if (!myVersionMatch) {
    return () => false;
  }
  const ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) {
    return function isExactmatch(globalVersion) {
      return globalVersion === ownVersion;
    };
  }
  function _reject(v) {
    rejectedVersions.add(v);
    return false;
  }
  function _accept(v) {
    acceptedVersions.add(v);
    return true;
  }
  return function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) {
      return true;
    }
    if (rejectedVersions.has(globalVersion)) {
      return false;
    }
    const globalVersionMatch = globalVersion.match(re);
    if (!globalVersionMatch) {
      return _reject(globalVersion);
    }
    const globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major !== globalVersionParsed.major) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) {
      return _accept(globalVersion);
    }
    return _reject(globalVersion);
  };
}
var isCompatible = _makeCompatibilityCheck(VERSION);

// node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
var major = VERSION.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = /* @__PURE__ */ Symbol.for(`opentelemetry.js.api.${major}`);
var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
function registerGlobal(type, instance, diag, allowOverride = false) {
  var _a2;
  const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a2 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a2 !== void 0 ? _a2 : {
    version: VERSION
  };
  if (!allowOverride && api[type]) {
    const err = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
    diag.error(err.stack || err.message);
    return false;
  }
  if (api.version !== VERSION) {
    const err = new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${VERSION}`);
    diag.error(err.stack || err.message);
    return false;
  }
  api[type] = instance;
  diag.debug(`@opentelemetry/api: Registered a global for ${type} v${VERSION}.`);
  return true;
}
function getGlobal(type) {
  var _a2, _b;
  const globalVersion = (_a2 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a2 === void 0 ? void 0 : _a2.version;
  if (!globalVersion || !isCompatible(globalVersion)) {
    return;
  }
  return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
  diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${VERSION}.`);
  const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) {
    delete api[type];
  }
}

// node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
var DiagComponentLogger = class {
  constructor(props) {
    this._namespace = props.namespace || "DiagComponentLogger";
  }
  debug(...args) {
    return logProxy("debug", this._namespace, args);
  }
  error(...args) {
    return logProxy("error", this._namespace, args);
  }
  info(...args) {
    return logProxy("info", this._namespace, args);
  }
  warn(...args) {
    return logProxy("warn", this._namespace, args);
  }
  verbose(...args) {
    return logProxy("verbose", this._namespace, args);
  }
};
function logProxy(funcName, namespace, args) {
  const logger = getGlobal("diag");
  if (!logger) {
    return;
  }
  return logger[funcName](namespace, ...args);
}

// node_modules/@opentelemetry/api/build/esm/diag/types.js
var DiagLogLevel;
(function(DiagLogLevel2) {
  DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
  DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
  DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
  DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
  DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
  DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
  DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));

// node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger) {
  if (maxLevel < DiagLogLevel.NONE) {
    maxLevel = DiagLogLevel.NONE;
  } else if (maxLevel > DiagLogLevel.ALL) {
    maxLevel = DiagLogLevel.ALL;
  }
  logger = logger || {};
  function _filterFunc(funcName, theLevel) {
    const theFunc = logger[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) {
      return theFunc.bind(logger);
    }
    return function() {
    };
  }
  return {
    error: _filterFunc("error", DiagLogLevel.ERROR),
    warn: _filterFunc("warn", DiagLogLevel.WARN),
    info: _filterFunc("info", DiagLogLevel.INFO),
    debug: _filterFunc("debug", DiagLogLevel.DEBUG),
    verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
  };
}

// node_modules/@opentelemetry/api/build/esm/api/diag.js
var API_NAME = "diag";
var DiagAPI = class _DiagAPI {
  /** Get the singleton instance of the DiagAPI API */
  static instance() {
    if (!this._instance) {
      this._instance = new _DiagAPI();
    }
    return this._instance;
  }
  /**
   * Private internal constructor
   * @private
   */
  constructor() {
    function _logProxy(funcName) {
      return function(...args) {
        const logger = getGlobal("diag");
        if (!logger)
          return;
        return logger[funcName](...args);
      };
    }
    const self2 = this;
    const setLogger = (logger, optionsOrLogLevel = { logLevel: DiagLogLevel.INFO }) => {
      var _a2, _b, _c;
      if (logger === self2) {
        const err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
        self2.error((_a2 = err.stack) !== null && _a2 !== void 0 ? _a2 : err.message);
        return false;
      }
      if (typeof optionsOrLogLevel === "number") {
        optionsOrLogLevel = {
          logLevel: optionsOrLogLevel
        };
      }
      const oldLogger = getGlobal("diag");
      const newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
      if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
        const stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
        oldLogger.warn(`Current logger will be overwritten from ${stack}`);
        newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
      }
      return registerGlobal("diag", newLogger, self2, true);
    };
    self2.setLogger = setLogger;
    self2.disable = () => {
      unregisterGlobal(API_NAME, self2);
    };
    self2.createComponentLogger = (options) => {
      return new DiagComponentLogger(options);
    };
    self2.verbose = _logProxy("verbose");
    self2.debug = _logProxy("debug");
    self2.info = _logProxy("info");
    self2.warn = _logProxy("warn");
    self2.error = _logProxy("error");
  }
};

// node_modules/@opentelemetry/api/build/esm/context/context.js
function createContextKey(description) {
  return Symbol.for(description);
}
var BaseContext = class _BaseContext {
  /**
   * Construct a new context which inherits values from an optional parent context.
   *
   * @param parentContext a context from which to inherit values
   */
  constructor(parentContext) {
    const self2 = this;
    self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
    self2.getValue = (key) => self2._currentContext.get(key);
    self2.setValue = (key, value) => {
      const context = new _BaseContext(self2._currentContext);
      context._currentContext.set(key, value);
      return context;
    };
    self2.deleteValue = (key) => {
      const context = new _BaseContext(self2._currentContext);
      context._currentContext.delete(key);
      return context;
    };
  }
};
var ROOT_CONTEXT = new BaseContext();

// node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var NoopContextManager = class {
  active() {
    return ROOT_CONTEXT;
  }
  with(_context, fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  bind(_context, target) {
    return target;
  }
  enable() {
    return this;
  }
  disable() {
    return this;
  }
};

// node_modules/@opentelemetry/api/build/esm/api/context.js
var API_NAME2 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var ContextAPI = class _ContextAPI {
  /** Empty private constructor prevents end users from constructing a new instance of the API */
  constructor() {
  }
  /** Get the singleton instance of the Context API */
  static getInstance() {
    if (!this._instance) {
      this._instance = new _ContextAPI();
    }
    return this._instance;
  }
  /**
   * Set the current context manager.
   *
   * @returns true if the context manager was successfully registered, else false
   */
  setGlobalContextManager(contextManager) {
    return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
  }
  /**
   * Get the currently active context
   */
  active() {
    return this._getContextManager().active();
  }
  /**
   * Execute a function with an active context
   *
   * @param context context to be active during function execution
   * @param fn function to execute in a context
   * @param thisArg optional receiver to be used for calling fn
   * @param args optional arguments forwarded to fn
   */
  with(context, fn, thisArg, ...args) {
    return this._getContextManager().with(context, fn, thisArg, ...args);
  }
  /**
   * Bind a context to a target function or event emitter
   *
   * @param context context to bind to the event emitter or function. Defaults to the currently active context
   * @param target function or event emitter to bind
   */
  bind(context, target) {
    return this._getContextManager().bind(context, target);
  }
  _getContextManager() {
    return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
  }
  /** Disable and remove the global context manager */
  disable() {
    this._getContextManager().disable();
    unregisterGlobal(API_NAME2, DiagAPI.instance());
  }
};

// node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
var TraceFlags;
(function(TraceFlags2) {
  TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
  TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));

// node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
  traceId: INVALID_TRACEID,
  spanId: INVALID_SPANID,
  traceFlags: TraceFlags.NONE
};

// node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
var NonRecordingSpan = class {
  constructor(spanContext = INVALID_SPAN_CONTEXT) {
    this._spanContext = spanContext;
  }
  // Returns a SpanContext.
  spanContext() {
    return this._spanContext;
  }
  // By default does nothing
  setAttribute(_key, _value) {
    return this;
  }
  // By default does nothing
  setAttributes(_attributes) {
    return this;
  }
  // By default does nothing
  addEvent(_name, _attributes) {
    return this;
  }
  addLink(_link) {
    return this;
  }
  addLinks(_links) {
    return this;
  }
  // By default does nothing
  setStatus(_status) {
    return this;
  }
  // By default does nothing
  updateName(_name) {
    return this;
  }
  // By default does nothing
  end(_endTime) {
  }
  // isRecording always returns false for NonRecordingSpan.
  isRecording() {
    return false;
  }
  // By default does nothing
  recordException(_exception, _time) {
  }
};

// node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
function getSpan(context) {
  return context.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context, span) {
  return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
  return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
  return setSpan(context, new NonRecordingSpan(spanContext));
}
function getSpanContext(context) {
  var _a2;
  return (_a2 = getSpan(context)) === null || _a2 === void 0 ? void 0 : _a2.spanContext();
}

// node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var isHex = new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1
]);
function isValidHex(id, length) {
  if (typeof id !== "string" || id.length !== length)
    return false;
  let r = 0;
  for (let i = 0; i < id.length; i += 4) {
    r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
  }
  return r === length;
}
function isValidTraceId(traceId) {
  return isValidHex(traceId, 32) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
  return isValidHex(spanId, 16) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var contextApi = ContextAPI.getInstance();
var NoopTracer = class {
  // startSpan starts a noop span.
  startSpan(name, options, context = contextApi.active()) {
    const root = Boolean(options === null || options === void 0 ? void 0 : options.root);
    if (root) {
      return new NonRecordingSpan();
    }
    const parentFromContext = context && getSpanContext(context);
    if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
      return new NonRecordingSpan(parentFromContext);
    } else {
      return new NonRecordingSpan();
    }
  }
  startActiveSpan(name, arg2, arg3, arg4) {
    let opts;
    let ctx;
    let fn;
    if (arguments.length < 2) {
      return;
    } else if (arguments.length === 2) {
      fn = arg2;
    } else if (arguments.length === 3) {
      opts = arg2;
      fn = arg3;
    } else {
      opts = arg2;
      ctx = arg3;
      fn = arg4;
    }
    const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
    const span = this.startSpan(name, opts, parentContext);
    const contextWithSpanSet = setSpan(parentContext, span);
    return contextApi.with(contextWithSpanSet, fn, void 0, span);
  }
};
function isSpanContext(spanContext) {
  return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
}

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER = new NoopTracer();
var ProxyTracer = class {
  constructor(provider, name, version, options) {
    this._provider = provider;
    this.name = name;
    this.version = version;
    this.options = options;
  }
  startSpan(name, options, context) {
    return this._getTracer().startSpan(name, options, context);
  }
  startActiveSpan(_name, _options, _context, _fn) {
    const tracer = this._getTracer();
    return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
  }
  /**
   * Try to get a tracer from the proxy tracer provider.
   * If the proxy tracer provider has no delegate, return a noop tracer.
   */
  _getTracer() {
    if (this._delegate) {
      return this._delegate;
    }
    const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
    if (!tracer) {
      return NOOP_TRACER;
    }
    this._delegate = tracer;
    return this._delegate;
  }
};

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
var NoopTracerProvider = class {
  getTracer(_name, _version, _options) {
    return new NoopTracer();
  }
};

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider = class {
  /**
   * Get a {@link ProxyTracer}
   */
  getTracer(name, version, options) {
    var _a2;
    return (_a2 = this.getDelegateTracer(name, version, options)) !== null && _a2 !== void 0 ? _a2 : new ProxyTracer(this, name, version, options);
  }
  getDelegate() {
    var _a2;
    return (_a2 = this._delegate) !== null && _a2 !== void 0 ? _a2 : NOOP_TRACER_PROVIDER;
  }
  /**
   * Set the delegate tracer provider
   */
  setDelegate(delegate) {
    this._delegate = delegate;
  }
  getDelegateTracer(name, version, options) {
    var _a2;
    return (_a2 = this._delegate) === null || _a2 === void 0 ? void 0 : _a2.getTracer(name, version, options);
  }
};

// node_modules/@opentelemetry/api/build/esm/trace/status.js
var SpanStatusCode;
(function(SpanStatusCode2) {
  SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
  SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
  SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));

// node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME3 = "trace";
var TraceAPI = class _TraceAPI {
  /** Empty private constructor prevents end users from constructing a new instance of the API */
  constructor() {
    this._proxyTracerProvider = new ProxyTracerProvider();
    this.wrapSpanContext = wrapSpanContext;
    this.isSpanContextValid = isSpanContextValid;
    this.deleteSpan = deleteSpan;
    this.getSpan = getSpan;
    this.getActiveSpan = getActiveSpan;
    this.getSpanContext = getSpanContext;
    this.setSpan = setSpan;
    this.setSpanContext = setSpanContext;
  }
  /** Get the singleton instance of the Trace API */
  static getInstance() {
    if (!this._instance) {
      this._instance = new _TraceAPI();
    }
    return this._instance;
  }
  /**
   * Set the current global tracer.
   *
   * @returns true if the tracer provider was successfully registered, else false
   */
  setGlobalTracerProvider(provider) {
    const success = registerGlobal(API_NAME3, this._proxyTracerProvider, DiagAPI.instance());
    if (success) {
      this._proxyTracerProvider.setDelegate(provider);
    }
    return success;
  }
  /**
   * Returns the global tracer provider.
   */
  getTracerProvider() {
    return getGlobal(API_NAME3) || this._proxyTracerProvider;
  }
  /**
   * Returns a tracer from the global tracer provider.
   */
  getTracer(name, version) {
    return this.getTracerProvider().getTracer(name, version);
  }
  /** Remove the global tracer provider */
  disable() {
    unregisterGlobal(API_NAME3, DiagAPI.instance());
    this._proxyTracerProvider = new ProxyTracerProvider();
  }
};

// node_modules/@opentelemetry/api/build/esm/trace-api.js
var trace = TraceAPI.getInstance();

// node_modules/@std-uritemplate/std-uritemplate/dist/index.mjs
var StdUriTemplate = class _StdUriTemplate {
  static expand(template, substitutions) {
    return _StdUriTemplate.expandImpl(template, substitutions);
  }
  static validateLiteral(c, col) {
    switch (c) {
      case "+":
      case "#":
      case "/":
      case ";":
      case "?":
      case "&":
      case " ":
      case "!":
      case "=":
      case "$":
      case "|":
      case "*":
      case ":":
      case "~":
      case "-":
        throw new Error(`Illegal character identified in the token at col: ${col}`);
      default:
        break;
    }
  }
  static getMaxChar(buffer, col) {
    if (!buffer) {
      return -1;
    } else {
      const value = buffer.join("");
      if (value.length === 0) {
        return -1;
      } else {
        if (value.startsWith("0")) {
          throw new Error(`Cannot parse max chars at col: ${col}`);
        }
        const parsed = parseInt(value, 10);
        if (isNaN(parsed) || parsed < 1 || parsed > 9999) {
          throw new Error(`Cannot parse max chars at col: ${col}`);
        }
        return parsed;
      }
    }
  }
  static getOperator(c, token, col) {
    switch (c) {
      case "+":
        return 1;
      case "#":
        return 2;
      case ".":
        return 3;
      case "/":
        return 4;
      case ";":
        return 5;
      case "?":
        return 6;
      case "&":
        return 7;
      default:
        _StdUriTemplate.validateLiteral(c, col);
        token.push(c);
        return 0;
    }
  }
  static expandImpl(str, substitutions) {
    const result = [];
    let token = null;
    let operator = null;
    let composite = false;
    let maxCharBuffer = null;
    let firstToken = true;
    for (let i = 0; i < str.length; i++) {
      const character = str.charAt(i);
      switch (character) {
        case "{":
          token = [];
          firstToken = true;
          break;
        case "}":
          if (token !== null) {
            if (maxCharBuffer !== null && maxCharBuffer.length === 0) {
              throw new Error(`Found an empty prefix at col: ${i}`);
            }
            const expanded = _StdUriTemplate.expandToken(operator, token.join(""), composite, _StdUriTemplate.getMaxChar(maxCharBuffer, i), firstToken, substitutions, result, i);
            if (expanded && firstToken) {
              firstToken = false;
            }
            token = null;
            operator = null;
            composite = false;
            maxCharBuffer = null;
          } else {
            throw new Error(`Failed to expand token, invalid at col: ${i}`);
          }
          break;
        case ",":
          if (token !== null) {
            if (maxCharBuffer !== null && maxCharBuffer.length === 0) {
              throw new Error(`Found an empty prefix at col: ${i}`);
            }
            const expanded = _StdUriTemplate.expandToken(operator, token.join(""), composite, _StdUriTemplate.getMaxChar(maxCharBuffer, i), firstToken, substitutions, result, i);
            if (expanded && firstToken) {
              firstToken = false;
            }
            token = [];
            composite = false;
            maxCharBuffer = null;
            break;
          }
        // Intentional fall-through for commas outside the {}
        default:
          if (token !== null) {
            if (operator === null) {
              operator = _StdUriTemplate.getOperator(character, token, i);
            } else if (maxCharBuffer !== null) {
              if (character >= "0" && character <= "9") {
                maxCharBuffer.push(character);
              } else {
                throw new Error(`Illegal character identified in the token at col: ${i}`);
              }
            } else {
              if (character === ":") {
                maxCharBuffer = [];
              } else if (character === "*") {
                composite = true;
              } else {
                _StdUriTemplate.validateLiteral(character, i);
                token.push(character);
              }
            }
          } else {
            const cp = character.codePointAt(0);
            if (cp > 127 || cp >= 55296 && cp <= 56319) {
              let toEncode;
              if (cp >= 55296 && cp <= 56319 && i + 1 < str.length) {
                toEncode = character + str.charAt(++i);
              } else {
                toEncode = character;
              }
              result.push(encodeURIComponent(toEncode));
            } else {
              result.push(character);
            }
          }
          break;
      }
    }
    if (token === null) {
      return result.join("");
    } else {
      throw new Error("Unterminated token");
    }
  }
  static addPrefix(op, result) {
    switch (op) {
      case 2:
        result.push("#");
        break;
      case 3:
        result.push(".");
        break;
      case 4:
        result.push("/");
        break;
      case 5:
        result.push(";");
        break;
      case 6:
        result.push("?");
        break;
      case 7:
        result.push("&");
        break;
      default:
        return;
    }
  }
  static addSeparator(op, result) {
    switch (op) {
      case 3:
        result.push(".");
        break;
      case 4:
        result.push("/");
        break;
      case 5:
        result.push(";");
        break;
      case 6:
      case 7:
        result.push("&");
        break;
      default:
        result.push(",");
        return;
    }
  }
  static addValue(op, token, value, result, maxChar) {
    switch (op) {
      case 1:
      case 2:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, false);
        break;
      case 6:
      case 7:
        result.push(`${token}=`);
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
      case 5:
        result.push(token);
        _StdUriTemplate.addExpandedValue("=", value, result, maxChar, true);
        break;
      case 3:
      case 4:
      case 0:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
    }
  }
  static addValueElement(op, token, value, result, maxChar) {
    switch (op) {
      case 1:
      case 2:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, false);
        break;
      case 6:
      case 7:
      case 5:
      case 3:
      case 4:
      case 0:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
    }
  }
  static isSurrogate(cp) {
    const codeUnit = cp.charCodeAt(0);
    return codeUnit >= 55296 && codeUnit <= 56319;
  }
  static isIprivate(cp) {
    return 57344 <= cp.charCodeAt(0) && cp.charCodeAt(0) <= 63743;
  }
  static isUcschar(cp) {
    const codePoint = cp.codePointAt(0) || 0;
    return 160 <= codePoint && codePoint <= 55295 || 63744 <= codePoint && codePoint <= 64975 || 65008 <= codePoint && codePoint <= 65519;
  }
  static addExpandedValue(prefix, value, result, maxChar, replaceReserved) {
    const stringValue = _StdUriTemplate.convertNativeTypes(value);
    const codePoints = Array.from(stringValue);
    const max = maxChar !== -1 ? Math.min(maxChar, codePoints.length) : codePoints.length;
    let reservedBuffer = void 0;
    if (max > 0 && prefix != null) {
      result.push(prefix);
    }
    for (let i = 0; i < max; i++) {
      const character = codePoints[i];
      if (character === "%" && !replaceReserved) {
        reservedBuffer = [];
      }
      let toAppend = character;
      const cp = character.codePointAt(0) || 0;
      if (cp > 65535) {
        toAppend = encodeURIComponent(character);
      } else if (replaceReserved || _StdUriTemplate.isUcschar(character) || _StdUriTemplate.isIprivate(character)) {
        if (character === "!") {
          toAppend = "%21";
        } else {
          toAppend = encodeURIComponent(toAppend);
        }
      }
      if (reservedBuffer) {
        reservedBuffer.push(toAppend);
        if (reservedBuffer.length === 3) {
          let isEncoded = false;
          try {
            const reserved = reservedBuffer.join("");
            const decoded = decodeURIComponent(reservedBuffer.join(""));
            isEncoded = reserved !== decoded;
          } catch (e) {
          }
          if (isEncoded) {
            result.push(reservedBuffer.join(""));
          } else {
            result.push("%25");
            result.push(reservedBuffer.slice(1).join(""));
          }
          reservedBuffer = void 0;
        }
      } else {
        if (character === " ") {
          result.push("%20");
        } else if (character === "%") {
          result.push("%25");
        } else {
          result.push(toAppend);
        }
      }
    }
    if (reservedBuffer) {
      result.push("%25");
      result.push(reservedBuffer.slice(1).join(""));
    }
  }
  static isList(value) {
    return Array.isArray(value) || value instanceof Set;
  }
  static isMap(value) {
    return value instanceof Map || typeof value === "object";
  }
  static getSubstitutionType(value, col) {
    if (value === void 0 || value === null) {
      return 0;
    } else if (_StdUriTemplate.isNativeType(value)) {
      return 1;
    } else if (_StdUriTemplate.isList(value)) {
      return 2;
    } else if (_StdUriTemplate.isMap(value)) {
      return 3;
    } else {
      throw new Error(`Illegal class passed as substitution, found ${typeof value} at col: ${col}`);
    }
  }
  static isEmpty(substType, value) {
    if (value === void 0 || value === null) {
      return true;
    } else {
      switch (substType) {
        case 1:
          return false;
        case 2:
          return value.length === 0;
        case 3:
          return Object.keys(value).length === 0;
        default:
          return true;
      }
    }
  }
  static isNativeType(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
  }
  static convertNativeTypes(value) {
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "number" || typeof value === "boolean") {
      return value.toString();
    } else {
      throw new Error(`Illegal class passed as substitution, found ${typeof value}`);
    }
  }
  static isHexDigit(c) {
    return c >= "0" && c <= "9" || c >= "A" && c <= "F" || c >= "a" && c <= "f";
  }
  static checkVarname(token, col) {
    if (token.startsWith(".") || token.endsWith(".")) {
      throw new Error(`Invalid variable name at col: ${col}`);
    }
    if (token.indexOf("..") !== -1) {
      throw new Error(`Invalid variable name at col: ${col}`);
    }
    for (let i = 0; i < token.length; i++) {
      if (token.charAt(i) === "%") {
        if (i + 2 >= token.length || !_StdUriTemplate.isHexDigit(token.charAt(i + 1)) || !_StdUriTemplate.isHexDigit(token.charAt(i + 2))) {
          throw new Error(`Invalid variable name at col: ${col}`);
        }
      }
    }
  }
  static expandToken(operator, token, composite, maxChar, firstToken, substitutions, result, col) {
    if (token.length === 0) {
      throw new Error(`Found an empty token at col: ${col}`);
    }
    _StdUriTemplate.checkVarname(token, col);
    const value = substitutions[token];
    const substType = _StdUriTemplate.getSubstitutionType(value, col);
    if (substType === 0 || _StdUriTemplate.isEmpty(substType, value)) {
      return false;
    }
    if (firstToken) {
      _StdUriTemplate.addPrefix(operator, result);
    } else {
      _StdUriTemplate.addSeparator(operator, result);
    }
    switch (substType) {
      case 1:
        _StdUriTemplate.addStringValue(operator, token, value, result, maxChar);
        break;
      case 2:
        _StdUriTemplate.addListValue(operator, token, value, result, maxChar, composite);
        break;
      case 3:
        _StdUriTemplate.addMapValue(operator, token, value, result, maxChar, composite);
        break;
    }
    return true;
  }
  static addStringValue(operator, token, value, result, maxChar) {
    _StdUriTemplate.addValue(operator, token, value, result, maxChar);
  }
  static addListValue(operator, token, value, result, maxChar, composite) {
    let first = true;
    for (const v of value) {
      if (first) {
        _StdUriTemplate.addValue(operator, token, v, result, maxChar);
        first = false;
      } else {
        if (composite) {
          _StdUriTemplate.addSeparator(operator, result);
          _StdUriTemplate.addValue(operator, token, v, result, maxChar);
        } else {
          result.push(",");
          _StdUriTemplate.addValueElement(operator, token, v, result, maxChar);
        }
      }
    }
  }
  static addMapValue(operator, token, value, result, maxChar, composite) {
    let first = true;
    if (maxChar !== -1) {
      throw new Error("Value trimming is not allowed on Maps");
    }
    for (const key in value) {
      const v = value[key];
      if (composite) {
        if (!first) {
          _StdUriTemplate.addSeparator(operator, result);
        }
        _StdUriTemplate.addValueElement(operator, token, key, result, maxChar);
        result.push("=");
      } else {
        if (first) {
          _StdUriTemplate.addValue(operator, token, key, result, maxChar);
        } else {
          result.push(",");
          _StdUriTemplate.addValueElement(operator, token, key, result, maxChar);
        }
        result.push(",");
      }
      _StdUriTemplate.addValueElement(operator, token, v, result, maxChar);
      first = false;
    }
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/dateOnly.js
var DateOnly = class _DateOnly {
  /**
   * Creates a new DateOnly from the given string.
   * @param root0 The year, month, and day
   * @param root0.year The year
   * @param root0.month The month
   * @param root0.day The day
   * @returns The new DateOnly
   * @throws An error if the year is invalid
   * @throws An error if the month is invalid
   * @throws An error if the day is invalid
   */
  constructor({ year = 0, month = 1, day = 1 }) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  /**
   * Creates a new DateOnly from the given date.
   * @param date The date
   * @returns The new DateOnly
   * @throws An error if the date is invalid
   */
  static fromDate(date) {
    if (!date) {
      throw new Error("Date cannot be undefined");
    }
    const result = new _DateOnly({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    });
    return result;
  }
  /**
   * Parses a string into a DateOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
   * @param value The value to parse
   * @returns The parsed DateOnly.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    if (!value || value.length === 0) {
      return void 0;
    }
    const exec = /^(\d{4,})-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/gi.exec(value);
    if (exec) {
      const year = parseInt(exec[1], 10);
      const month = parseInt(exec[2], 10);
      const day = parseInt(exec[3], 10);
      return new _DateOnly({ year, month, day });
    }
    const ticks = Date.parse(value);
    if (!isNaN(ticks)) {
      const date = new Date(ticks);
      return this.fromDate(date);
    }
    throw new Error(`Value is not a valid date-only representation: ${value}`);
  }
  /**
   *  Returns a string representation of the date in the format YYYY-MM-DD
   * @returns The date in the format YYYY-MM-DD ISO 8601
   */
  toString() {
    return `${formatSegment(this.year, 4)}-${formatSegment(this.month)}-${formatSegment(this.day)}`;
  }
};
function formatSegment(segment, digits = 2) {
  return segment.toString().padStart(digits, "0");
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/duration.js
var import_tinyduration = __toESM(require_dist(), 1);
var Duration = class _Duration {
  /**
   * Creates a new Duration value from the given parameters.
   * @param root0 The years, months, weeks, days, hours, minutes, seconds, and negative flag
   * @param root0.years The years
   * @param root0.months The months
   * @param root0.weeks The weeks
   * @param root0.days The days
   * @param root0.hours The hours
   * @param root0.minutes The minutes
   * @param root0.seconds The seconds
   * @param root0.negative The negative flag
   * @returns The new Duration
   * @throws An error if years is invalid
   * @throws An error if months is invalid
   * @throws An error if weeks is invalid
   * @throws An error if days is invalid
   * @throws An error if hours is invalid
   * @throws An error if minutes is invalid
   * @throws An error if seconds is invalid
   * @throws An error if weeks is used in combination with years or months
   */
  constructor({ years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, negative = false }) {
    if (years < 0 || years > 9999) {
      throw new Error("Year must be between 0 and 9999");
    }
    if (months < 0) {
      throw new Error("Month must be greater or equal to 0");
    }
    if (weeks < 0) {
      throw new Error("Week must be greater or equal to 0");
    }
    if (days < 0) {
      throw new Error("Day must be greater or equal to 0");
    }
    if (hours < 0) {
      throw new Error("Hour must be greater or equal to 0");
    }
    if (minutes < 0) {
      throw new Error("Minute must be greater or equal to 0");
    }
    if (seconds < 0) {
      throw new Error("Second must be greater or equal to 0");
    }
    if (weeks > 0 && (days > 0 || hours > 0 || minutes > 0 || seconds > 0)) {
      throw new Error("Cannot have weeks and days or hours or minutes or seconds");
    }
    if ((years > 0 || months > 0) && weeks > 0) {
      throw new Error("Cannot have weeks and months or weeks and years");
    }
    this.years = years;
    this.months = months;
    this.weeks = weeks;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.negative = negative;
  }
  /**
   * Parses a string into a Duration. The string can be of the ISO 8601 duration format.
   * @param value The value to parse
   * @returns The parsed Duration.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (!value || value.length === 0) {
      return void 0;
    }
    const duration = (0, import_tinyduration.parse)(value);
    return new _Duration({
      years: (_a2 = duration.years) !== null && _a2 !== void 0 ? _a2 : 0,
      months: (_b = duration.months) !== null && _b !== void 0 ? _b : 0,
      weeks: (_c = duration.weeks) !== null && _c !== void 0 ? _c : 0,
      days: (_d = duration.days) !== null && _d !== void 0 ? _d : 0,
      hours: (_e = duration.hours) !== null && _e !== void 0 ? _e : 0,
      minutes: (_f = duration.minutes) !== null && _f !== void 0 ? _f : 0,
      seconds: (_g = duration.seconds) !== null && _g !== void 0 ? _g : 0,
      negative: (_h = duration.negative) !== null && _h !== void 0 ? _h : false
    });
  }
  /**
   * Serializes the duration to a string in the ISO 8601 duration format.
   * @returns The serialized duration.
   */
  toString() {
    return (0, import_tinyduration.serialize)(this);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/recordWithCaseInsensitiveKeys.js
function dictionaryWithCanonicalKeys(canon) {
  const keysNormalizationMap = /* @__PURE__ */ new Map();
  return new Proxy({}, {
    /**
     * Intercept the get operation on the dictionary object and forward it to the target object using Reflect.get.
     * @param target The target object.
     * @param prop The property to get.
     * @returns The value of the property.
     */
    get(target, prop) {
      const normalKey = canon(prop);
      return Reflect.get(target, normalKey);
    },
    /**
     * Intercept the set operation on the dictionary object and forward it to the target object using Reflect.set.
     * @param target The target object.
     * @param prop The property to set.
     * @param value The value to set.
     * @returns A boolean indicating whether the property was set.
     */
    set(target, prop, value) {
      const nonNormalKey = prop.toString();
      const normalKey = canon(prop);
      keysNormalizationMap.set(normalKey, nonNormalKey);
      return Reflect.set(target, normalKey, value);
    },
    /**
     * Intercept the has operation on the dictionary object and forward it to the target object using Reflect.has.
     * @param _ the target object.
     * @param prop The property to check.
     * @returns A boolean indicating whether the property exists.
     */
    has(_, prop) {
      const normalKey = canon(prop);
      return keysNormalizationMap.has(normalKey);
    },
    /**
     * Intercept the defineProperty operation on the dictionary object and forward it to the target object using Reflect.defineProperty.
     * @param target The target object.
     * @param prop The property to define.
     * @param attribs The attributes of the property.
     * @returns A boolean indicating whether the property was defined.
     */
    defineProperty(target, prop, attribs) {
      const nonNormalKey = prop.toString();
      const normalKey = canon(prop);
      keysNormalizationMap.set(normalKey, nonNormalKey);
      return Reflect.defineProperty(target, normalKey, attribs);
    },
    /**
     * Intercept the deleteProperty operation on the dictionary object and forward it to the target object using Reflect.deleteProperty.
     * @param target The target object.
     * @param prop The property to delete.
     * @returns A boolean indicating whether the property was deleted.
     */
    deleteProperty(target, prop) {
      const normalKey = canon(prop);
      keysNormalizationMap.delete(normalKey);
      return Reflect.deleteProperty(target, normalKey);
    },
    /**
     * Intercept the getOwnPropertyDescriptor operation on the dictionary object and forward it to the target object using Reflect.getOwnPropertyDescriptor.
     * @param target The target object.
     * @param prop The property to gets its descriptor.
     * @returns The property descriptor.
     */
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target, canon(prop));
    },
    ownKeys() {
      return [...keysNormalizationMap.values()];
    }
  });
}
function createRecordWithCaseInsensitiveKeys() {
  const record = dictionaryWithCanonicalKeys((p) => typeof p === "string" ? p.toLowerCase() : p.toString().toLowerCase());
  return record;
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/headers.js
var Headers = class extends Map {
  /**
   * Creates a new Headers object.
   * @param entries An iterable object that contains key-value pairs. Each key-value pair must be an array with two elements: the key of the header, and the value of the header.
   * @example
   * ```typescript
   *  const entries: [string, Set<string>][] = [
   *    ['header1', new Set(['value1'])],
   *    ['header2', new Set(['value2', 'value3'])]
   *  ];
   *  const headers = new Headers(entries);
   * ```
   */
  constructor(entries) {
    super();
    this.headers = createRecordWithCaseInsensitiveKeys();
    this.singleValueHeaders = /* @__PURE__ */ new Set(["Content-Type", "Content-Encoding", "Content-Length"]);
    if (entries) {
      entries.forEach(([key, value]) => {
        this.headers[key] = value;
      });
    }
  }
  /**
   * Sets a header with the specified name and value. If a header with the same name already exists, its value is appended with the specified value.
   * @param headerName the name of the header to set
   * @param headerValue the value of the header to set
   * @returns Headers object
   */
  set(headerName, headerValue) {
    this.add(headerName, ...headerValue);
    return this;
  }
  /**
   * Gets the values for the header with the specified name.
   * @param headerName The name of the header to get the values for.
   * @returns The values for the header with the specified name.
   * @throws Error if headerName is null or empty
   */
  get(headerName) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    return this.headers[headerName];
  }
  /**
   * Checks if a header exists.
   * @param key The name of the header to check for.
   * @returns whether or not a header with the given name/key exists.
   */
  has(key) {
    return !!key && !!this.headers[key];
  }
  /**
   * Delete the header with the specified name.
   * @param headerName The name of the header to delete.
   * @returns Whether or not the header existed and was deleted.
   * @throws Error if headerName is null or empty
   */
  delete(headerName) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (this.headers[headerName]) {
      delete this.headers[headerName];
      return true;
    }
    return false;
  }
  /**
   * clear the headers collection
   */
  clear() {
    for (const header in this.headers) {
      if (Object.prototype.hasOwnProperty.call(this.headers, header)) {
        delete this.headers[header];
      }
    }
  }
  /**
   * execute a provided function once per each header
   * @param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each header in the dictionary.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn, thisArg) {
    for (const header in this.headers) {
      if (Object.prototype.hasOwnProperty.call(this.headers, header)) {
        callbackfn.call(thisArg, this.headers[header], header, this);
      }
    }
  }
  /**
   * Adds values to the header with the specified name.
   * @param headerName The name of the header to add values to.
   * @param headerValues The values to add to the header.
   * @returns Whether or not the values were added to the header.
   */
  add(headerName, ...headerValues) {
    if (!headerName) {
      console.error("headerName cannot be null or empty");
      return false;
    }
    if (!headerValues) {
      console.error("headerValues cannot be null");
      return false;
    }
    if (headerValues.length === 0) {
      return false;
    }
    if (this.singleValueHeaders.has(headerName)) {
      this.headers[headerName] = /* @__PURE__ */ new Set([headerValues[0]]);
    } else if (this.headers[headerName]) {
      headerValues.forEach((headerValue) => this.headers[headerName].add(headerValue));
    } else {
      this.headers[headerName] = new Set(headerValues);
    }
    return true;
  }
  /**
   * Adds values to the header with the specified name if it's not already present
   * @param headerName The name of the header to add values to.
   * @param headerValue The values to add to the header.
   * @returns If the headerValue have been added to the Dictionary.
   */
  tryAdd(headerName, headerValue) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (!headerValue) {
      throw new Error("headerValue cannot be null");
    }
    if (!this.headers[headerName]) {
      this.headers[headerName] = /* @__PURE__ */ new Set([headerValue]);
      return true;
    }
    return false;
  }
  /**
   * Removes the specified value from the header with the specified name.
   * @param headerName The name of the header to remove the value from.
   * @param headerValue The value to remove from the header.
   * @returns Whether or not the header existed and was removed.
   * @throws Error if headerName is null or empty
   * @throws Error if headerValue is null
   */
  remove(headerName, headerValue) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (!headerValue) {
      throw new Error("headerValue cannot be null");
    }
    if (this.headers[headerName]) {
      const result = this.headers[headerName].delete(headerValue);
      if (this.headers[headerName].size === 0) {
        delete this.headers[headerName];
      }
      return result;
    }
    return false;
  }
  /**
   * Adds all the headers values from the specified headers collection.
   * @param headers The headers to update the current headers with.
   * @throws Error if headers is null
   */
  addAll(headers) {
    if (!headers) {
      throw new Error("headers cannot be null");
    }
    for (const header in headers.headers) {
      if (Object.prototype.hasOwnProperty.call(headers.headers, header)) {
        headers.headers[header].forEach((value) => this.add(header, value));
      }
    }
  }
  /**
   * Adds all headers from the request configuration value to the current headers collection.
   * Replaces any existing headers with the same key.
   * @param headers The headers to update the current headers with.
   * @throws Error if headers is null
   */
  addAllRaw(headers) {
    if (!headers) {
      throw new Error("headers cannot be null");
    }
    for (const header in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, header)) {
        const headerValues = headers[header];
        if (Array.isArray(headerValues)) {
          this.add(header, ...headerValues);
        } else {
          this.add(header, headerValues);
        }
      }
    }
  }
  /**
   * Gets the values for the header with the specified name.
   * @param key The name of the header to get the values for.
   * @returns The values for the header with the specified name.
   * @throws Error if key is null or empty
   */
  tryGetValue(key) {
    if (!key) {
      throw new Error("key cannot be null or empty");
    }
    return this.headers[key] ? Array.from(this.headers[key]) : null;
  }
  /**
   * Override toString method for the headers collection
   * @returns a string representation of the headers collection
   */
  toString() {
    return JSON.stringify(this.headers, (_key, value) => value instanceof Set ? [...value] : value);
  }
  /**
   * check if the headers collection is empty
   * @returns a boolean indicating if the headers collection is empty
   */
  isEmpty() {
    return Object.keys(this.headers).length === 0;
  }
  /**
   * get keys of the headers collection
   * @returns an iterator of keys
   */
  keys() {
    return Object.keys(this.headers)[Symbol.iterator]();
  }
  /**
   * get entries
   * @returns an iterator of entries
   */
  entries() {
    return Object.entries(this.headers)[Symbol.iterator]();
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/multipartBody.js
var MultipartBody = class {
  /**
   * Instantiates a new MultipartBody.
   */
  constructor() {
    this._parts = {};
    this._boundary = createGuid().replace(/-/g, "");
  }
  /**
   * Adds or replaces a part with the given name, content type and content.
   * @param partName the name of the part to add or replace.
   * @param partContentType the content type of the part to add or replace.
   * @param content the content of the part to add or replace.
   * @param serializationCallback the serialization callback to use when serializing the part.
   * @param fileName the name of the file associated with this part.
   */
  addOrReplacePart(partName, partContentType, content, serializationCallback, fileName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    if (!partContentType) {
      throw new Error("partContentType cannot be undefined");
    }
    if (!content)
      throw new Error("content cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    this._parts[normalizePartName] = {
      contentType: partContentType,
      content,
      originalName: partName,
      fileName,
      serializationCallback
    };
  }
  /**
   * Gets the content of the part with the given name.
   * @param partName the name of the part to get the content for.
   * @returns the content of the part with the given name.
   */
  getPartValue(partName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    const candidate = this._parts[normalizePartName];
    if (!candidate)
      return void 0;
    return candidate.content;
  }
  /**
   * Removes the part with the given name.
   * @param partName the name of the part to remove.
   * @returns true if the part was removed, false if it did not exist.
   */
  removePart(partName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    if (!this._parts[normalizePartName])
      return false;
    delete this._parts[normalizePartName];
    return true;
  }
  /**
   * Gets the boundary used to separate each part.
   * @returns the boundary value.
   */
  getBoundary() {
    return this._boundary;
  }
  normalizePartName(original) {
    return original.toLocaleLowerCase();
  }
  /**
   * Lists all the parts in the multipart body.
   * WARNING: meant for internal use only
   * @returns the list of parts in the multipart body.
   */
  listParts() {
    return this._parts;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/timeOnly.js
var TimeOnly = class _TimeOnly {
  /**
   * Creates a new TimeOnly from the given parameters.
   * @param root0 The hours, minutes, seconds, and milliseconds
   * @param root0.hours The hours
   * @param root0.minutes The minutes
   * @param root0.seconds The seconds
   * @param root0.picoseconds The milliseconds
   * @returns The new TimeOnly
   * @throws An error if the milliseconds are invalid
   * @throws An error if the seconds are invalid
   * @throws An error if the minutes are invalid
   * @throws An error if the hours are invalid
   * @throws An error if the milliseconds are invalid
   */
  constructor({ hours = 0, minutes = 0, seconds = 0, picoseconds = 0 }) {
    if (hours < 0 || hours > 23) {
      throw new Error("Hour must be between 0 and 23");
    }
    if (minutes < 0 || minutes > 59) {
      throw new Error("Minute must be between 0 and 59");
    }
    if (seconds < 0 || seconds > 59) {
      throw new Error("Second must be between 0 and 59");
    }
    if (picoseconds < 0 || picoseconds > 9999999) {
      throw new Error("Millisecond must be between 0 and 9999999");
    }
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.picoseconds = picoseconds;
  }
  /**
   * Creates a new TimeOnly from the given date.
   * @param date The date
   * @returns The new TimeOnly
   * @throws An error if the date is invalid
   */
  static fromDate(date) {
    if (!date) {
      throw new Error("Date cannot be undefined");
    }
    return new _TimeOnly({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      picoseconds: date.getMilliseconds() * 1e4
    });
  }
  /**
   * Parses a string into a TimeOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
   * @param value The value to parse
   * @returns The parsed TimeOnly.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    var _a2, _b, _c, _d;
    if (!value || value.length === 0) {
      return void 0;
    }
    const ticks = Date.parse(value);
    if (isNaN(ticks)) {
      const exec = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(?:[.](\d{1,12}))?$/gi.exec(value);
      if (exec) {
        const hours = parseInt((_a2 = exec[1]) !== null && _a2 !== void 0 ? _a2 : "", 10);
        const minutes = parseInt((_b = exec[2]) !== null && _b !== void 0 ? _b : "", 10);
        const seconds = parseInt((_c = exec[3]) !== null && _c !== void 0 ? _c : "", 10);
        const milliseconds = parseInt((_d = exec[4]) !== null && _d !== void 0 ? _d : "0", 10);
        return new _TimeOnly({
          hours,
          minutes,
          seconds,
          picoseconds: milliseconds
        });
      } else {
        throw new Error("Value is not a valid time-only representation");
      }
    } else {
      const date = new Date(ticks);
      return this.fromDate(date);
    }
  }
  /**
   * Returns a string representation of the time in the format HH:MM:SS.SSSSSSS
   * @returns The time in the format HH:MM:SS.SSSSSSS
   * @throws An error if the time is invalid
   */
  toString() {
    return `${formatSegment(this.hours, 2)}:${formatSegment(this.minutes, 2)}:${formatSegment(this.seconds, 2)}.${formatSegment(this.picoseconds, 7)}`;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/requestInformation.js
var RequestInformation = class _RequestInformation {
  /**
   * Initializes a request information instance with the provided values.
   * @param httpMethod The HTTP method for the request.
   * @param urlTemplate The URL template for the request.
   * @param pathParameters The path parameters for the request.
   */
  constructor(httpMethod, urlTemplate, pathParameters) {
    this.pathParameters = createRecordWithCaseInsensitiveKeys();
    this.queryParameters = createRecordWithCaseInsensitiveKeys();
    this.headers = new Headers();
    this._requestOptions = createRecordWithCaseInsensitiveKeys();
    this.setContentFromParsable = (requestAdapter, contentType, value, modelSerializerFunction) => {
      trace.getTracer(_RequestInformation.tracerKey).startActiveSpan("setContentFromParsable", (span) => {
        try {
          const writer = this.getSerializationWriter(requestAdapter, contentType, value);
          if (value instanceof MultipartBody) {
            contentType += "; boundary=" + value.getBoundary();
          }
          if (!this.headers) {
            this.headers = new Headers();
          }
          if (Array.isArray(value)) {
            span.setAttribute(_RequestInformation.requestTypeKey, "object[]");
            writer.writeCollectionOfObjectValues(void 0, value, modelSerializerFunction);
          } else {
            span.setAttribute(_RequestInformation.requestTypeKey, "object");
            writer.writeObjectValue(void 0, value, modelSerializerFunction);
          }
          this.setContentAndContentType(writer, contentType);
        } finally {
          span.end();
        }
      });
    };
    this.setContentAndContentType = (writer, contentType) => {
      if (contentType) {
        this.headers.tryAdd(_RequestInformation.contentTypeHeader, contentType);
      }
      this.content = writer.getSerializedContent();
    };
    this.getSerializationWriter = (requestAdapter, contentType, ...values) => {
      if (!requestAdapter)
        throw new Error("httpCore cannot be undefined");
      if (!contentType)
        throw new Error("contentType cannot be undefined");
      if (!values || values.length === 0) {
        throw new Error("values cannot be undefined or empty");
      }
      return requestAdapter.getSerializationWriterFactory().getSerializationWriter(contentType);
    };
    this.setContentFromScalar = (requestAdapter, contentType, value) => {
      trace.getTracer(_RequestInformation.tracerKey).startActiveSpan("setContentFromScalar", (span) => {
        try {
          const writer = this.getSerializationWriter(requestAdapter, contentType, value);
          if (!this.headers) {
            this.headers = new Headers();
          }
          if (Array.isArray(value)) {
            span.setAttribute(_RequestInformation.requestTypeKey, "[]");
            writer.writeCollectionOfPrimitiveValues(void 0, value);
          } else {
            const valueType = typeof value;
            span.setAttribute(_RequestInformation.requestTypeKey, valueType);
            if (!value) {
              writer.writeNullValue(void 0);
            } else if (valueType === "boolean") {
              writer.writeBooleanValue(void 0, value);
            } else if (valueType === "string") {
              writer.writeStringValue(void 0, value);
            } else if (value instanceof Date) {
              writer.writeDateValue(void 0, value);
            } else if (value instanceof DateOnly) {
              writer.writeDateOnlyValue(void 0, value);
            } else if (value instanceof TimeOnly) {
              writer.writeTimeOnlyValue(void 0, value);
            } else if (value instanceof Duration) {
              writer.writeDurationValue(void 0, value);
            } else if (valueType === "number") {
              writer.writeNumberValue(void 0, value);
            } else if (Array.isArray(value)) {
              writer.writeCollectionOfPrimitiveValues(void 0, value);
            } else {
              throw new Error(`encountered unknown value type during serialization ${valueType}`);
            }
          }
          this.setContentAndContentType(writer, contentType);
        } finally {
          span.end();
        }
      });
    };
    this.setStreamContent = (value, contentType) => {
      if (!contentType) {
        contentType = _RequestInformation.binaryContentType;
      }
      this.headers.tryAdd(_RequestInformation.contentTypeHeader, contentType);
      this.content = value;
    };
    if (httpMethod) {
      this.httpMethod = httpMethod;
    }
    if (urlTemplate) {
      this.urlTemplate = urlTemplate;
    }
    if (pathParameters) {
      this.pathParameters = pathParameters;
    }
  }
  /**
   * Gets the URL of the request
   * @returns the url string
   */
  get URL() {
    const rawUrl = this.pathParameters[_RequestInformation.raw_url_key];
    if (this.uri) {
      return this.uri;
    } else if (rawUrl) {
      this.URL = rawUrl;
      return rawUrl;
    } else if (!this.queryParameters) {
      throw new Error("queryParameters cannot be undefined");
    } else if (!this.pathParameters) {
      throw new Error("pathParameters cannot be undefined");
    } else if (!this.urlTemplate) {
      throw new Error("urlTemplate cannot be undefined");
    } else {
      const data = {};
      for (const key in this.queryParameters) {
        if (this.queryParameters[key] !== null && this.queryParameters[key] !== void 0) {
          data[key] = this.normalizeValue(this.queryParameters[key]);
        }
      }
      for (const key in this.pathParameters) {
        if (this.pathParameters[key] !== null && this.pathParameters[key] !== void 0) {
          data[key] = this.normalizeValue(this.pathParameters[key]);
        }
      }
      return StdUriTemplate.expand(this.urlTemplate, data);
    }
  }
  /** Sets the URL of the request */
  set URL(url) {
    if (!url)
      throw new Error("URL cannot be undefined");
    this.uri = url;
    this.queryParameters = {};
    this.pathParameters = {};
  }
  /**
   * Gets the request options for the request.
   * @returns the request options.
   */
  getRequestOptions() {
    return this._requestOptions;
  }
  /**
   * Adds the headers for the request.
   * @param source The source collection to add the headers to
   */
  addRequestHeaders(source) {
    if (source) {
      this.headers.addAllRaw(source);
    }
  }
  /**
   * Adds the request options for the request.
   * @param options the options to add.
   */
  addRequestOptions(options) {
    if (!options || options.length === 0)
      return;
    options.forEach((option) => {
      this._requestOptions[option.getKey()] = option;
    });
  }
  /**
   * Removes the request options for the request.
   * @param options the options to remove.
   */
  removeRequestOptions(...options) {
    if (!options || options.length === 0)
      return;
    options.forEach((option) => {
      delete this._requestOptions[option.getKey()];
    });
  }
  normalizeValue(value) {
    if (value instanceof DateOnly || value instanceof TimeOnly || value instanceof Duration) {
      return value.toString();
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value)) {
      return value.map((val) => this.normalizeValue(val));
    }
    return value;
  }
  /**
   * Sets the query string parameters from a raw object.
   * @param q parameters the parameters.
   * @param p the mapping from code symbol to URI template parameter name.
   */
  setQueryStringParametersFromRawObject(q, p) {
    if (q === null || q === void 0)
      return;
    Object.entries(q).forEach(([k, v]) => {
      let key = k;
      if (p) {
        const keyCandidate = p[key];
        if (keyCandidate) {
          key = keyCandidate;
        }
      }
      if (typeof v === "boolean" || typeof v === "number" || typeof v === "string" || Array.isArray(v))
        this.queryParameters[key] = v;
      else if (v instanceof DateOnly || v instanceof TimeOnly || v instanceof Duration)
        this.queryParameters[key] = v.toString();
      else if (v instanceof Date)
        this.queryParameters[key] = v.toISOString();
      else if (v === void 0)
        this.queryParameters[key] = void 0;
    });
  }
  /**
   * Configure the current request with headers, query parameters and options.
   * @param config the configuration object to use.
   * @param queryParametersMapper mapping between code symbols and URI template parameter names.
   */
  configure(config, queryParametersMapper) {
    if (!config)
      return;
    this.addRequestHeaders(config.headers);
    this.setQueryStringParametersFromRawObject(config.queryParameters, queryParametersMapper);
    this.addRequestOptions(config.options);
  }
};
RequestInformation.raw_url_key = "request-raw-url";
RequestInformation.binaryContentType = "application/octet-stream";
RequestInformation.contentTypeHeader = "Content-Type";
RequestInformation.tracerKey = "@microsoft/kiota-abstractions";
RequestInformation.requestTypeKey = "com.microsoft.kiota.request.type";

// node_modules/@microsoft/kiota-abstractions/dist/es/src/getPathParameters.js
var getPathParameters = (parameters) => {
  const result = {};
  if (typeof parameters === "string") {
    result[RequestInformation.raw_url_key] = parameters;
  } else if (parameters) {
    for (const key in parameters) {
      if (Object.prototype.hasOwnProperty.call(parameters, key)) {
        result[key] = parameters[key];
      }
    }
  }
  return result;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/httpMethod.js
var HttpMethod;
(function(HttpMethod2) {
  HttpMethod2["GET"] = "GET";
  HttpMethod2["POST"] = "POST";
  HttpMethod2["PATCH"] = "PATCH";
  HttpMethod2["DELETE"] = "DELETE";
  HttpMethod2["OPTIONS"] = "OPTIONS";
  HttpMethod2["CONNECT"] = "CONNECT";
  HttpMethod2["TRACE"] = "TRACE";
  HttpMethod2["HEAD"] = "HEAD";
  HttpMethod2["PUT"] = "PUT";
})(HttpMethod || (HttpMethod = {}));

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiClientProxifier.js
var sanitizeMethodName = (methodName) => {
  if (methodName.startsWith("to")) {
    return methodName.substring(2).replace("RequestInformation", "").toLowerCase();
  }
  return methodName;
};
var getRequestMethod = (key) => {
  switch (sanitizeMethodName(key)) {
    case "delete":
      return "delete";
    case "get":
      return "get";
    case "head":
      return "head";
    case "options":
      return "options";
    case "patch":
      return "patch";
    case "post":
      return "post";
    case "put":
      return "put";
    default:
      return void 0;
  }
};
var toRequestInformation = (urlTemplate, pathParameters, metadata, requestAdapter, httpMethod, body, bodyMediaType, requestConfiguration) => {
  const requestInfo = new RequestInformation(httpMethod, urlTemplate, pathParameters);
  requestInfo.configure(requestConfiguration, metadata.queryParametersMapper);
  addAcceptHeaderIfPresent(metadata, requestInfo);
  if (metadata.requestBodySerializer) {
    if (!body)
      throw new Error("body cannot be undefined");
    if (typeof metadata.requestBodySerializer === "function") {
      requestInfo.setContentFromParsable(requestAdapter, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType, body, metadata.requestBodySerializer);
    } else {
      requestInfo.setContentFromScalar(requestAdapter, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType, body);
    }
  } else if (metadata.requestInformationContentSetMethod === "setStreamContent") {
    if (!body)
      throw new Error("body cannot be undefined");
    requestInfo.setStreamContent(body, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType);
  }
  return requestInfo;
};
var addAcceptHeaderIfPresent = (metadata, requestInfo) => {
  if (metadata.responseBodyContentType) {
    requestInfo.headers.tryAdd("Accept", metadata.responseBodyContentType);
  }
};
var getRequestMediaTypeUserDefinedValue = (requestMetadata, args) => {
  if (args.length > 2 && !requestMetadata.requestBodySerializer && requestMetadata.requestInformationContentSetMethod === "setStreamContent" && typeof args[1] === "string") {
    return args[1];
  }
  return void 0;
};
var getRequestConfigurationValue = (args) => {
  if (args.length > 0) {
    return args[args.length - 1];
  }
  return void 0;
};
var send = (requestAdapter, requestInfo, metadata) => {
  switch (metadata.adapterMethodName) {
    case "send":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.send(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendCollection":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollection(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendEnum":
      if (!metadata.enumObject) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendEnum(requestInfo, metadata.enumObject, metadata.errorMappings);
    case "sendCollectionOfEnum":
      if (!metadata.enumObject) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollectionOfEnum(requestInfo, metadata.enumObject, metadata.errorMappings);
    case "sendCollectionOfPrimitive":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollectionOfPrimitive(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendPrimitive":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendPrimitive(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendNoResponseContent":
      return requestAdapter.sendNoResponseContent(requestInfo, metadata.errorMappings);
    default:
      throw new Error("couldn't find adapter method");
  }
};
var apiClientProxifier = (requestAdapter, pathParameters, navigationMetadata, requestsMetadata) => {
  if (!requestAdapter)
    throw new Error("requestAdapter cannot be undefined");
  if (!pathParameters)
    throw new Error("pathParameters cannot be undefined");
  return new Proxy({}, {
    get: (_, property) => {
      const name = String(property);
      if (name === "withUrl") {
        return (rawUrl) => {
          if (!rawUrl)
            throw new Error("rawUrl cannot be undefined");
          return apiClientProxifier(requestAdapter, getPathParameters(rawUrl), navigationMetadata, requestsMetadata);
        };
      }
      if (requestsMetadata) {
        const metadataKey = getRequestMethod(name);
        if (metadataKey) {
          const metadata = requestsMetadata[metadataKey];
          if (metadata) {
            switch (name) {
              case "get":
                return (requestConfiguration) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.GET, void 0, void 0, requestConfiguration);
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "patch":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PATCH, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "put":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PUT, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "delete":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.DELETE, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "post":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.POST, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "toGetRequestInformation":
                return (requestConfiguration) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.GET, void 0, void 0, requestConfiguration);
                };
              case "toPatchRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PATCH, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toPutRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PUT, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toDeleteRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.DELETE, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toPostRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.POST, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              default:
                break;
            }
          }
        }
      }
      if (navigationMetadata) {
        const navigationCandidate = navigationMetadata[name];
        if (navigationCandidate) {
          if (!navigationCandidate.pathParametersMappings || navigationCandidate.pathParametersMappings.length === 0) {
            return apiClientProxifier(requestAdapter, getPathParameters(pathParameters), navigationCandidate.navigationMetadata, navigationCandidate.requestsMetadata);
          }
          return (...argArray) => {
            const downWardPathParameters = getPathParameters(pathParameters);
            if (navigationCandidate.pathParametersMappings && navigationCandidate.pathParametersMappings.length > 0) {
              for (let i = 0; i < argArray.length; i++) {
                const element = argArray[i];
                if (element === void 0 || element === null || element === "") {
                  throw new Error(`path parameter ${navigationCandidate.pathParametersMappings[i]} cannot be undefined`);
                } else {
                  downWardPathParameters[navigationCandidate.pathParametersMappings[i]] = element;
                }
              }
            }
            return apiClientProxifier(requestAdapter, downWardPathParameters, navigationCandidate.navigationMetadata, navigationCandidate.requestsMetadata);
          };
        }
        if (name === "then") {
          return void 0;
        }
        throw new Error(`couldn't find navigation property ${name} data: ${JSON.stringify(navigationMetadata)}`);
      }
    }
  });
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiError.js
var DefaultApiError = class extends Error {
  constructor(message) {
    super(message);
    this.responseHeaders = {};
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/authentication/allowedHostsValidator.js
var AllowedHostsValidator = class {
  /**
   * Creates a new AllowedHostsValidator object with provided values.
   * @param allowedHosts A list of valid hosts.  If the list is empty, all hosts are valid.
   */
  constructor(allowedHosts = /* @__PURE__ */ new Set()) {
    this.validateHosts(allowedHosts);
    this.allowedHosts = allowedHosts !== null && allowedHosts !== void 0 ? allowedHosts : /* @__PURE__ */ new Set();
  }
  /**
   * Gets the list of valid hosts.  If the list is empty, all hosts are valid.
   * @returns A list of valid hosts.  If the list is empty, all hosts are valid.
   */
  getAllowedHosts() {
    return Array.from(this.allowedHosts);
  }
  /**
   * Sets the list of valid hosts.  If the list is empty, all hosts are valid.
   * @param allowedHosts A list of valid hosts.  If the list is empty, all hosts are valid.
   */
  setAllowedHosts(allowedHosts) {
    this.validateHosts(allowedHosts);
    this.allowedHosts = allowedHosts;
  }
  /**
   * Checks whether the provided host is valid.
   * @param url The url to check.
   * @returns True if the host is valid, false otherwise.
   */
  isUrlHostValid(url) {
    var _a2, _b;
    if (!url)
      return false;
    if (this.allowedHosts.size === 0)
      return true;
    const schemeAndRest = url.split("://");
    if (schemeAndRest.length >= 2) {
      const rest = schemeAndRest[1];
      if (rest) {
        return this.isHostAndPathValid(rest);
      }
    } else if (!url.startsWith("http")) {
      return this.isHostAndPathValid(url);
    }
    if ((_a2 = window === null || window === void 0 ? void 0 : window.location) === null || _a2 === void 0 ? void 0 : _a2.host) {
      return this.allowedHosts.has((_b = window.location.host) === null || _b === void 0 ? void 0 : _b.toLowerCase());
    }
    return false;
  }
  isHostAndPathValid(rest) {
    const hostAndRest = rest.split("/");
    if (hostAndRest.length >= 2) {
      const host = hostAndRest[0];
      if (host) {
        return this.allowedHosts.has(host.toLowerCase());
      }
    }
    return false;
  }
  validateHosts(hostsToValidate) {
    if (!hostsToValidate) {
      throw new Error("hostsToValidate cannot be null");
    }
    hostsToValidate.forEach((host) => {
      if (host.toLowerCase().startsWith("http://") || host.toLowerCase().startsWith("https://")) {
        throw new Error("host should not contain http or https prefix");
      }
    });
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/authentication/apiKeyAuthenticationProvider.js
var ApiKeyLocation;
(function(ApiKeyLocation2) {
  ApiKeyLocation2[ApiKeyLocation2["QueryParameter"] = 0] = "QueryParameter";
  ApiKeyLocation2[ApiKeyLocation2["Header"] = 1] = "Header";
})(ApiKeyLocation || (ApiKeyLocation = {}));

// node_modules/@microsoft/kiota-abstractions/dist/es/src/authentication/baseBearerTokenAuthenticationProvider.js
var BaseBearerTokenAuthenticationProvider = class _BaseBearerTokenAuthenticationProvider {
  /**
   * The constructor for the BaseBearerTokenAuthenticationProvider
   * @param accessTokenProvider The AccessTokenProvider instance that this provider will use to authenticate requests.
   */
  constructor(accessTokenProvider) {
    this.accessTokenProvider = accessTokenProvider;
    this.authenticateRequest = (request, additionalAuthenticationContext) => __async(this, null, function* () {
      var _a2;
      if (!request) {
        throw new Error("request info cannot be null");
      }
      if ((additionalAuthenticationContext === null || additionalAuthenticationContext === void 0 ? void 0 : additionalAuthenticationContext.claims) && request.headers.has(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey)) {
        request.headers.delete(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey);
      }
      if (!((_a2 = request.headers) === null || _a2 === void 0 ? void 0 : _a2.has(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey))) {
        const token = yield this.accessTokenProvider.getAuthorizationToken(request.URL, additionalAuthenticationContext);
        if (!request.headers) {
          request.headers = new Headers();
        }
        if (token) {
          request.headers.add(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey, `Bearer ${token}`);
        }
      }
    });
  }
};
BaseBearerTokenAuthenticationProvider.authorizationHeaderKey = "Authorization";

// node_modules/@microsoft/kiota-abstractions/dist/es/src/nativeResponseHandler.js
var NativeResponseHandler = class {
  handleResponse(response, errorMappings) {
    this.value = response;
    this.errorMappings = errorMappings;
    return Promise.resolve(void 0);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/nativeResponseWrapper.js
var _a;
var NativeResponseWrapper = class {
};
_a = NativeResponseWrapper;
NativeResponseWrapper.CallAndGetNative = (originalCall, q, h, o) => __async(null, null, function* () {
  const responseHandler = new NativeResponseHandler();
  yield originalCall(q, h, o, responseHandler);
  return responseHandler.value;
});
NativeResponseWrapper.CallAndGetNativeWithBody = (originalCall, requestBody, q, h, o) => __async(null, null, function* () {
  const responseHandler = new NativeResponseHandler();
  yield originalCall(requestBody, q, h, o, responseHandler);
  return responseHandler.value;
});

// node_modules/@microsoft/kiota-abstractions/dist/es/src/responseHandlerOptions.js
var ResponseHandlerOptionKey = "ResponseHandlerOptionKey";

export {
  ParseNodeFactoryRegistry,
  SerializationWriterFactoryRegistry,
  createUntypedNodeFromDiscriminatorValue,
  isUntypedNode,
  isUntypedNumber,
  createUntypedNumber,
  isUntypedArray,
  createUntypedArray,
  isUntypedNull,
  createUntypedNull,
  isUntypedObject,
  createUntypedObject,
  isUntypedString,
  createUntypedString,
  isUntypedBoolean,
  createUntypedBoolean,
  getEnumValueFromStringValue,
  parseGuidString,
  inNodeEnv,
  InMemoryBackingStoreFactory,
  createBackedModelProxyHandler,
  isBackingStoreEnabled,
  enableBackingStoreForSerializationWriterFactory,
  enableBackingStoreForParseNodeFactory,
  SpanStatusCode,
  trace,
  DateOnly,
  Duration,
  Headers,
  MultipartBody,
  TimeOnly,
  HttpMethod,
  apiClientProxifier,
  DefaultApiError,
  AllowedHostsValidator,
  BaseBearerTokenAuthenticationProvider,
  ResponseHandlerOptionKey
};
//# sourceMappingURL=chunk-GBFPCZ3F.js.map
