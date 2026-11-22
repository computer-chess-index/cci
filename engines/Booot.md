# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3198<sub>(+35) | 3460<sub>(+116) | 3579<sub>(+92) |  |
| 7.3 | 2024-01-28 | 3163 | 3344 | 3487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3186<sub>(+30) | 3441<sub>(+57) | 3488<sub>(+156) |  |
| 7.3 | 2024-01-28 | 3156 | 3384 | 3332 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3241 | 3456 | 3499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Booot+<version>&body=###%20Engine%20name%0ABooot%0A%0A###%20Version%0A7.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:36:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3163, 3198]
  line "E1: LTC (60.0+0.60s)" [3344, 3460]
  line "E1: VLTC (2m24s+1.12s)" [3487, 3579]
  line "P1: STC (8.0+0.08s)" [3156, 3186]
  line "P1: LTC (60.0+0.60s)" [3384, 3441]
  line "P1: VLTC (2m24s+1.12s)" [3332, 3488]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3488 | 38 | 174 | 54% | 3418 | 78% |
|  |  | E1 | 3579 | 31 | 262 | 53% | 3530 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  |  | P1 | 3441 | 39 | 164 | 52% | 3391 | 77% |
|  |  | E1 | 3460 | 27 | 346 | 55% | 3386 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
|  |  | P1 | 3186 | 31 | 270 | 48% | 3202 | 62% |
|  |  | E1 | 3198 | 26 | 380 | 47% | 3218 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3332 | 105 | 28 | 71% | 3131 | 50% |
|  |  | E1 | 3487 | 85 | 44 | 68% | 3247 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3344 | 81 | 42 | 52% | 3305 | 57% |
|  |  | P1 | 3384 | 109 | 24 | 65% | 3212 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3163 | 72 | 58 | 49% | 3168 | 47% |
|  |  | P1 | 3156 | 91 | 40 | 55% | 3081 | 35% |