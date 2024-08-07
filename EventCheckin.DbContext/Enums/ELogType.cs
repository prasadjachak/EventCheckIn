using EventCheckin.Utility.Attributes;

namespace EventCheckin.DbContext.Enums
{
    public enum ELogType
    {
        [EnumDescription("Unknown", 0)]
        Unknown = 0,

        [EnumDescription("New eventEntity added", 0)]
        EventEntityAdded = 1,
        [EnumDescription("EventEntity updated", 0)]
        EventEntityUpdated = 2,

        // etc...
    }
}
