using EventCheckin.Infrastructure.DbUtility;
using System;

namespace EventCheckin.Services.VueBoilerplate
{
    public class MockArticleDocument : IEntity
    {
        public int Id { get; set; }
        public string OriginalName { get; set; }
        public string UniqueName { get; set; }
        public string DocumentType { get; set; }
        public DateTime Date { get; set; }
        public long ArticleId { get; set; }
    }
}
