# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3278 | 3522 | 3556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3510 | 3681 | 3735 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3363<sub>(+15) | 3513<sub>(+15) | 3544<sub>(-4) |  |
| 1.0 | 2025-01-08 | 3348 | 3498 | 3548 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:39:25

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3348, 3363]
  line "T1: LTC (60.0+0.60s)" [3498, 3513]
  line "T1: VLTC (2m24s+1.12s)" [3548, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 16 | 946 | 50% | 3541 | 87% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3735 | 44 | 116 | 49% | 3744 | 87% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 37 | 168 | 51% | 3545 | 85% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3681 | 46 | 108 | 49% | 3690 | 82% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 40 | 148 | 54% | 3495 | 82% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 16 | 950 | 51% | 3509 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3510 | 38 | 172 | 50% | 3511 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3278 | 31 | 278 | 46% | 3302 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3363 | 15 | 1098 | 50% | 3364 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 28 | 304 | 49% | 3553 | 86% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 26 | 348 | 51% | 3490 | 85% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 29 | 292 | 49% | 3352 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |