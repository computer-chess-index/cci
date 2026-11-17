# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3445<sub>(-19) | 3664<sub>(+89) | 3695<sub>(+77) |  |
| 15.0 | 2025-01-31 | 3464 | 3575 | 3618 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3414<sub>(+36) | 3588<sub>(+33) | 3638<sub>(+147) |  |
| 15.0 | 2025-01-31 | 3378 | 3555 | 3491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3449<sub>(+28) | 3571<sub>(+26) | 3596<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3421<sub>(-7) | 3545<sub>(-7) | 3569<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3428<sub>(+23) | 3552<sub>(+27) | 3571<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3405 | 3525 | 3564 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Obsidian+<version>&body=###%20Engine%20name%0AObsidian%0A%0A###%20Version%0A16.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:40:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3464, 3445]
  line "E1: LTC (60.0+0.60s)" [3575, 3664]
  line "E1: VLTC (2m24s+1.12s)" [3618, 3695]
  line "P1: STC (8.0+0.08s)" [3378, 3414]
  line "P1: LTC (60.0+0.60s)" [3555, 3588]
  line "P1: VLTC (2m24s+1.12s)" [3491, 3638]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "T1: STC (8.0+0.08s)" [3405, 3428, 3421, 3449]
  line "T1: LTC (60.0+0.60s)" [3525, 3552, 3545, 3571]
  line "T1: VLTC (2m24s+1.12s)" [3564, 3571, 3569, 3596]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3596 | 20 | 564 | 53% | 3579 | 92% |
|  |  | P1 | 3638 | 43 | 124 | 50% | 3636 | 85% |
|  |  | E1 | 3695 | 27 | 298 | 50% | 3696 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3588 | 39 | 148 | 51% | 3584 | 86% |
|  |  | T1 | 3571 | 17 | 800 | 51% | 3564 | 89% |
|  |  | E1 | 3664 | 32 | 226 | 50% | 3660 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3414 | 34 | 212 | 49% | 3417 | 77% |
|  |  | T1 | 3449 | 14 | 1196 | 49% | 3451 | 76% |
|  |  | E1 | 3445 | 25 | 402 | 48% | 3461 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3569 | 31 | 236 | 51% | 3564 | 89% |
|  |  | P1 | 3491 | 94 | 36 | 72% | 3060 | 56% |
|  |  | E1 | 3618 | 64 | 60 | 58% | 3548 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3555 | 152 | 24 | 90% | 3063 | 21% |
|  |  | T1 | 3545 | 29 | 280 | 50% | 3544 | 84% |
|  |  | E1 | 3575 | 63 | 68 | 64% | 3445 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3378 | 131 | 20 | 75% | 3117 | 40% |
|  |  | T1 | 3421 | 27 | 320 | 51% | 3411 | 79% |
|  |  | E1 | 3464 | 58 | 76 | 52% | 3426 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 22 | 492 | 52% | 3560 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3552 | 19 | 644 | 51% | 3544 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3428 | 16 | 944 | 50% | 3425 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3564 | 38 | 160 | 52% | 3545 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3525 | 34 | 200 | 49% | 3533 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3405 | 28 | 332 | 52% | 3393 | 68% |