# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3403<sub>(+1911) | 3632<sub>(+95) | 3664<sub>(+115) |  |
| 13 | 2024-03-31 | 1492 | 3537 | 3549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3414<sub>(+1836) | 3556<sub>(+253) | 3622<sub>(+246) |  |
| 13 | 2024-03-31 | 1578 | 3303 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-14 05:36:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1400 --> 3700
  line "E1: STC (8.0+0.08s)" [1492, 3403]
  line "E1: LTC (60.0+0.60s)" [3537, 3632]
  line "E1: VLTC (2m24s+1.12s)" [3549, 3664]
  line "P1: STC (8.0+0.08s)" [1578, 3414]
  line "P1: LTC (60.0+0.60s)" [3303, 3556]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3622]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1600 --> 3600
  line "T1: STC (8.0+0.08s)" [1600, 3443]
  line "T1: LTC (60.0+0.60s)" [3538, 3555]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3622 | 40 | 140 | 51% | 3614 | 94% |
|  |  | E1 | 3664 | 32 | 226 | 50% | 3661 | 86% |
|  |  | T1 | 3586 | 29 | 268 | 51% | 3582 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3556 | 37 | 172 | 49% | 3564 | 81% |
|  |  | E1 | 3632 | 32 | 232 | 51% | 3625 | 83% |
|  |  | T1 | 3555 | 29 | 264 | 50% | 3556 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3403 | 25 | 394 | 47% | 3425 | 70% |
|  |  | T1 | 3443 | 24 | 426 | 53% | 3372 | 76% |
|  |  | P1 | 3414 | 33 | 216 | 48% | 3426 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 183 | 12 | 83% | 2982 | 33% |
|  |  | E1 | 3549 | 131 | 24 | 77% | 3235 | 29% |
|  |  | T1 | 3563 | 13 | 1458 | 53% | 3488 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3537 | 178 | 16 | 88% | 3085 | 25% |
|  |  | T1 | 3538 | 12 | 1740 | 51% | 3534 | 87% |
|  |  | P1 | 3303 | 163 | 18 | 89% | 2913 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1492 | 68 | 84 | 58% | 1384 | 15% |
|  |  | T1 | 1600 | 15 | 1932 | 53% | 1558 | 10% |
|  |  | P1 | 1578 | 111 | 48 | 26% | 2028 | 6% |