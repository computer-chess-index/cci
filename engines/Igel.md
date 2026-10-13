# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3205 | 3486 | 3541 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3436 | 3680 | 3717 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3295<sub>(+106) | 3492<sub>(+72) | 3538<sub>(+67) |  |
| 3.6.0 | 2024-12-28 | 3189<sub>(+15) | 3420<sub>(+4) | 3471<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3174 | 3416 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Igel+<version>&body=###%20Engine%20name%0AIgel%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:39:36

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "T1: STC (8.0+0.08s)" [3174, 3189, 3295]
  line "T1: LTC (60.0+0.60s)" [3416, 3420, 3492]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3471, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 34 | 196 | 49% | 3548 | 86% |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 28 | 282 | 51% | 3529 | 87% |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3717 | 41 | 134 | 51% | 3711 | 87% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 33 | 220 | 50% | 3490 | 77% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 30 | 260 | 49% | 3497 | 80% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3680 | 37 | 176 | 52% | 3668 | 76% |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3205 | 31 | 272 | 46% | 3236 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3295 | 32 | 248 | 50% | 3298 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3436 | 37 | 186 | 49% | 3444 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 12 | 1674 | 50% | 3474 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 12 | 1616 | 50% | 3417 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3189 | 12 | 1708 | 49% | 3198 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3452 | 17 | 800 | 50% | 3449 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 17 | 828 | 49% | 3418 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3174 | 18 | 872 | 52% | 3133 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |