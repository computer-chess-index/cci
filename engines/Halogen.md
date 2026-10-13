# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3285 | 3514 | 3561 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3505 | 3686 | 3721 |  |
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

Generated: 2026-10-13 04:39:14

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3298, 3374]
  line "T1: LTC (60.0+0.60s)" [3483, 3536]
  line "T1: VLTC (2m24s+1.12s)" [3538, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 21 | 538 | 50% | 3563 | 87% |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3721 | 37 | 204 | 63% | 3528 | 68% |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 33 | 256 | 63% | 3393 | 73% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 20 | 556 | 50% | 3537 | 86% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3686 | 49 | 112 | 60% | 3532 | 71% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 44 | 154 | 62% | 3302 | 60% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 20 | 642 | 50% | 3376 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3505 | 35 | 196 | 49% | 3509 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 31 | 288 | 46% | 3316 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 27 | 324 | 52% | 3521 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 30 | 276 | 52% | 3464 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 32 | 256 | 54% | 3259 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |