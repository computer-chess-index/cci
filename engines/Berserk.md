# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3339 | 3576 | 3602 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3618 | 3753 | 3802 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3443<sub>(+1843) | 3555<sub>(+17) | 3586<sub>(+23) |  |
| 13 | 2024-03-31 | 1600 | 3538 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A14" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 09:59:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1600 --> 3600
  line "" [1600, 3443]
  line "T1: STC (8.0+0.08s)" [1600, 3443]
  line "T1: LTC (60.0+0.60s)" [3538, 3555]
  line "" [3563, 3586]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3586]
  line "" [1600,3339]
  line "E1: STC (8.0+0.08s)" [1600,3339]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3802 | 60 | 60 | 52% | 3791 | 93% |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3602 | 42 | 132 | 51% | 3594 | 86% |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 29 | 268 | 51% | 3582 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 40 | 144 | 53% | 3559 | 83% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 29 | 264 | 50% | 3556 | 91% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3753 | 45 | 112 | 49% | 3757 | 86% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3339 | 30 | 286 | 45% | 3374 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3443 | 24 | 426 | 53% | 3372 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3618 | 40 | 152 | 49% | 3622 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 13 | 1458 | 53% | 3488 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 12 | 1740 | 51% | 3534 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1600 | 15 | 1932 | 53% | 1558 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |