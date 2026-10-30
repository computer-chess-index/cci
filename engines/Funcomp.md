# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3291<sub>(+494) | 3542<sub>(+361) | 3618<sub>(+371) |  |
| 2.0 | 2026-10-03 | 2797 | 3181 | 3247 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3405<sub>(+556) | 3572<sub>(+422) | 3630<sub>(+331) |  |
| 2.0 | 2026-10-03 | 2849 | 3150 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-09-28 | 2576 | 2809 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Funcomp+<version>&body=###%20Engine%20name%0AFuncomp%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-30 05:38:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2700 --> 3700
  line "E1: STC (8.0+0.08s)" [2797, 3291]
  line "E1: LTC (60.0+0.60s)" [3181, 3542]
  line "E1: VLTC (2m24s+1.12s)" [3247, 3618]
  line "P1: STC (8.0+0.08s)" [2849, 3405]
  line "P1: LTC (60.0+0.60s)" [3150, 3572]
  line "P1: VLTC (2m24s+1.12s)" [3299, 3630]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3618 | 40 | 160 | 55% | 3571 | 71% |
|  |  | P1 | 3630 | 43 | 138 | 58% | 3568 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3572 | 46 | 124 | 57% | 3507 | 69% |
|  |  | E1 | 3542 | 38 | 176 | 56% | 3494 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3405 | 55 | 92 | 57% | 3312 | 60% |
|  |  | E1 | 3291 | 37 | 208 | 54% | 3248 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3299 | 40 | 192 | 57% | 3206 | 46% |
|  |  | E1 | 3247 | 34 | 272 | 54% | 3179 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3150 | 40 | 212 | 61% | 2934 | 43% |
|  |  | E1 | 3181 | 35 | 262 | 53% | 3100 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2849 | 45 | 168 | 51% | 2822 | 28% |
|  |  | E1 | 2797 | 34 | 302 | 57% | 2674 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |