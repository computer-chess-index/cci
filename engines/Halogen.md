# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3268 | 3503 | 3544 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3552 | 3735 | 3767 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3374<sub>(+76) | 3536<sub>(+53) | 3563<sub>(+25) |  |
| 15.0.0 | 2025-09-01 | 3298 | 3483 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:12:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3298, 3374]
  line "STC (8.0+0.08s)" [3298, 3374]
  line "LTC (60.0+0.60s)" [3483, 3536]
  line "" [3538, 3563]
  line "VLTC (2m24s+1.12s)" [3538, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 21 | 538 | 50% | 3563 | 87% |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3767 | 37 | 200 | 64% | 3568 | 68% |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 34 | 244 | 63% | 3370 | 71% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 20 | 556 | 50% | 3537 | 86% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3735 | 51 | 104 | 61% | 3567 | 70% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 45 | 146 | 63% | 3275 | 60% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 20 | 642 | 50% | 3376 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3552 | 37 | 176 | 49% | 3556 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3268 | 31 | 276 | 45% | 3305 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 27 | 324 | 52% | 3521 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 30 | 276 | 52% | 3464 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 32 | 256 | 54% | 3259 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |