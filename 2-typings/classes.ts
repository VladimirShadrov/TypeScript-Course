// Упражнение "Перегрузка методов"

class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skill: string[]): void;
  addSkill(skill: string | string[]): void {
    if (typeof skill === 'string') {
      this.skills.push(skill);
    } else if (Array.isArray(skill)) {
      this.skills = [...this.skills, ...skill];
    }
  }
}
