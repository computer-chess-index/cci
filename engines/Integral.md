# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3390 | 3579 | 3627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3633 | 3771 | 3789 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3475<sub>(+95) | 3592<sub>(+60) | 3578<sub>(+26) |  |
| 7.0 | 2025-02-14 | 3380 | 3532 | 3552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Integral+<version>&body=###%20Engine%20name%0AIntegral%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 11:15:56

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3380, 3475]
  line "T1: LTC (60.0+0.60s)" [3532, 3592]
  line "T1: VLTC (2m24s+1.12s)" [3552, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3627 | 35 | 188 | 53% | 3607 | 89% |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 34 | 190 | 51% | 3573 | 95% |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3789 | 43 | 122 | 50% | 3788 | 86% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3592 | 39 | 148 | 51% | 3583 | 91% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3771 | 42 | 128 | 49% | 3776 | 84% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3579 | 39 | 152 | 49% | 3586 | 88% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3475 | 27 | 316 | 52% | 3463 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3633 | 36 | 188 | 47% | 3657 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3390 | 32 | 250 | 44% | 3429 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 15 | 1010 | 50% | 3552 | 87% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 15 | 1012 | 50% | 3530 | 85% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 15 | 1158 | 50% | 3378 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |