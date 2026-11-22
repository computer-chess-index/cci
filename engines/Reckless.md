# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3524<sub>(+45) | 3684<sub>(+70) | 3704<sub>(+24) |  |
| 0.8.0 | 2025-08-30 | 3479 | 3614 | 3680 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3505<sub>(+150) | 3637<sub>(+128) | 3676<sub>(+58) |  |
| 0.8.0 | 2025-08-30 | 3355 | 3509 | 3618 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3498<sub>(+43) | 3584<sub>(+12) | 3607<sub>(+21) |  |
| 0.8.0 | 2025-08-30 | 3455 | 3572 | 3586 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Reckless+<version>&body=###%20Engine%20name%0AReckless%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:41:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3479, 3524]
  line "E1: LTC (60.0+0.60s)" [3614, 3684]
  line "E1: VLTC (2m24s+1.12s)" [3680, 3704]
  line "P1: STC (8.0+0.08s)" [3355, 3505]
  line "P1: LTC (60.0+0.60s)" [3509, 3637]
  line "P1: VLTC (2m24s+1.12s)" [3618, 3676]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "T1: STC (8.0+0.08s)" [3455, 3498]
  line "T1: LTC (60.0+0.60s)" [3572, 3584]
  line "T1: VLTC (2m24s+1.12s)" [3586, 3607]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3607 | 30 | 244 | 53% | 3587 | 93% |
|  |  | P1 | 3676 | 42 | 142 | 58% | 3564 | 79% |
|  |  | E1 | 3704 | 21 | 510 | 54% | 3664 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3584 | 25 | 356 | 51% | 3579 | 93% |
|  |  | P1 | 3637 | 41 | 146 | 56% | 3557 | 82% |
|  |  | E1 | 3684 | 27 | 370 | 57% | 3501 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3498 | 19 | 668 | 51% | 3494 | 82% |
|  |  | P1 | 3505 | 34 | 192 | 49% | 3507 | 91% |
|  |  | E1 | 3524 | 26 | 362 | 48% | 3541 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3586 | 27 | 306 | 54% | 3560 | 88% |
|  |  | P1 | 3618 | 146 | 16 | 78% | 3301 | 44% |
|  |  | E1 | 3680 | 71 | 56 | 63% | 3444 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3572 | 29 | 268 | 51% | 3559 | 87% |
|  |  | P1 | 3509 | 76 | 48 | 67% | 3287 | 67% |
|  |  | E1 | 3614 | 68 | 68 | 71% | 3363 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3455 | 26 | 378 | 51% | 3440 | 74% |
|  |  | P1 | 3355 | 82 | 48 | 71% | 3060 | 54% |
|  |  | E1 | 3479 | 59 | 76 | 61% | 3339 | 68% |