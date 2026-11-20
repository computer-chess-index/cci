# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3276<sub>(+35) | 3511<sub>(+37) | 3545<sub>(+7) |  |
| 3.0 | 2026-10-20 | 3241<sub>(+498) | 3474<sub>(+351) | 3538<sub>(+348) |  |
| 2.0 | 2026-10-03 | 2743 | 3123 | 3190 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3294<sub>(+49) | 3465<sub>(+55) | 3514<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3245<sub>(+511) | 3410<sub>(+401) | 3461<sub>(+322) |  |
| 2.0 | 2026-10-03 | 2734 | 3009 | 3139 |  |
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

Generated: 2026-11-20 05:38:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2743, 3241, 3276]
  line "E1: LTC (60.0+0.60s)" [3123, 3474, 3511]
  line "E1: VLTC (2m24s+1.12s)" [3190, 3538, 3545]
  line "P1: STC (8.0+0.08s)" [2734, 3245, 3294]
  line "P1: LTC (60.0+0.60s)" [3009, 3410, 3465]
  line "P1: VLTC (2m24s+1.12s)" [3139, 3461, 3514]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3514 | 36 | 182 | 52% | 3499 | 84% |
|  |  | E1 | 3545 | 31 | 246 | 50% | 3545 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3465 | 37 | 184 | 53% | 3444 | 68% |
|  |  | E1 | 3511 | 30 | 267 | 51% | 3501 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3294 | 36 | 196 | 51% | 3290 | 64% |
|  |  | E1 | 3276 | 31 | 272 | 51% | 3267 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 40 | 158 | 57% | 3407 | 75% |
|  |  | E1 | 3538 | 34 | 220 | 52% | 3518 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3410 | 44 | 136 | 57% | 3349 | 71% |
|  |  | E1 | 3474 | 34 | 224 | 54% | 3443 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3245 | 51 | 106 | 56% | 3167 | 63% |
|  |  | E1 | 3241 | 31 | 292 | 53% | 3206 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3139 | 40 | 192 | 57% | 3050 | 46% |
|  |  | E1 | 3190 | 34 | 272 | 54% | 3123 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3009 | 40 | 212 | 61% | 2805 | 43% |
|  |  | E1 | 3123 | 35 | 262 | 53% | 3042 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2734 | 45 | 168 | 51% | 2708 | 28% |
|  |  | E1 | 2743 | 34 | 302 | 57% | 2622 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |