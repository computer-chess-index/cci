# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3197<sub>(+38) | 3457<sub>(+117) | 3575<sub>(+91) |  |
| 7.3 | 2024-01-28 | 3159 | 3340 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3186<sub>(+30) | 3441<sub>(+58) | 3488<sub>(+156) |  |
| 7.3 | 2024-01-28 | 3156 | 3383 | 3332 |  |
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

Generated: 2026-11-21 05:36:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3159, 3197]
  line "E1: LTC (60.0+0.60s)" [3340, 3457]
  line "E1: VLTC (2m24s+1.12s)" [3484, 3575]
  line "P1: STC (8.0+0.08s)" [3156, 3186]
  line "P1: LTC (60.0+0.60s)" [3383, 3441]
  line "P1: VLTC (2m24s+1.12s)" [3332, 3488]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3575 | 31 | 262 | 53% | 3526 | 74% |
|  |  | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3488 | 38 | 174 | 54% | 3418 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  |  | P1 | 3441 | 39 | 160 | 52% | 3390 | 77% |
|  |  | E1 | 3457 | 27 | 346 | 55% | 3382 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
|  |  | P1 | 3186 | 32 | 266 | 48% | 3202 | 61% |
|  |  | E1 | 3197 | 26 | 376 | 47% | 3214 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3332 | 105 | 28 | 71% | 3131 | 50% |
|  |  | E1 | 3484 | 85 | 44 | 68% | 3244 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3383 | 109 | 24 | 65% | 3212 | 63% |
|  |  | E1 | 3340 | 81 | 42 | 52% | 3301 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3156 | 91 | 40 | 55% | 3079 | 35% |
|  |  | E1 | 3159 | 72 | 58 | 49% | 3164 | 47% |