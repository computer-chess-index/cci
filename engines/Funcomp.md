# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3256<sub>(+497) | 3507<sub>(+361) | 3579<sub>(+367) |  |
| 2.0 | 2026-10-03 | 2759 | 3146 | 3212 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3382<sub>(+554) | 3549<sub>(+421) | 3605<sub>(+327) |  |
| 2.0 | 2026-10-03 | 2828 | 3128 | 3278 |  |
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

Generated: 2026-10-23 04:38:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2700 --> 3700
  line "E1: STC (8.0+0.08s)" [2759, 3256]
  line "E1: LTC (60.0+0.60s)" [3146, 3507]
  line "E1: VLTC (2m24s+1.12s)" [3212, 3579]
  line "P1: STC (8.0+0.08s)" [2828, 3382]
  line "P1: LTC (60.0+0.60s)" [3128, 3549]
  line "P1: VLTC (2m24s+1.12s)" [3278, 3605]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3605 | 45 | 126 | 58% | 3537 | 71% |
|  |  | E1 | 3579 | 40 | 156 | 55% | 3534 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3549 | 51 | 104 | 58% | 3471 | 66% |
|  |  | E1 | 3507 | 38 | 176 | 56% | 3459 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3382 | 62 | 76 | 59% | 3270 | 59% |
|  |  | E1 | 3256 | 38 | 202 | 54% | 3212 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3278 | 40 | 192 | 57% | 3183 | 46% |
|  |  | E1 | 3212 | 34 | 272 | 54% | 3143 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3128 | 40 | 212 | 61% | 2912 | 43% |
|  |  | E1 | 3146 | 35 | 262 | 53% | 3063 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2828 | 45 | 168 | 51% | 2801 | 28% |
|  |  | E1 | 2759 | 34 | 302 | 57% | 2638 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |