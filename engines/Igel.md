# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.8.0 | 2026-10-18 | 3424<sub>(+77) | 3677<sub>(+45) | 3731<sub>(+44) |  |
| 3.7.0 | 2026-08-27 | 3347 | 3632 | 3687 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.8.0 | 2026-10-18 | 3568<sub>(+89) | 3726<sub>(+8) | 3780<sub>(+28) |  |
| 3.7.0 | 2026-08-27 | 3479 | 3718 | 3752 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-11 05:38:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.7.0", "3.8.0"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3347, 3424]
  line "E1: LTC (60.0+0.60s)" [3632, 3677]
  line "E1: VLTC (2m24s+1.12s)" [3687, 3731]
  line "P1: STC (8.0+0.08s)" [3479, 3568]
  line "P1: LTC (60.0+0.60s)" [3718, 3726]
  line "P1: VLTC (2m24s+1.12s)" [3752, 3780]
```



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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3780 | 42 | 124 | 52% | 3767 | 93% |
|  |  | E1 | 3731 | 34 | 192 | 52% | 3718 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3726 | 37 | 164 | 48% | 3735 | 85% |
|  |  | E1 | 3677 | 32 | 236 | 52% | 3663 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3568 | 36 | 192 | 51% | 3559 | 70% |
|  |  | E1 | 3424 | 33 | 238 | 50% | 3425 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3752 | 41 | 134 | 51% | 3745 | 87% |
|  |  | E1 | 3687 | 33 | 212 | 49% | 3694 | 86% |
|  |  | T1 | 3538 | 28 | 282 | 51% | 3529 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3632 | 32 | 232 | 49% | 3637 | 78% |
|  |  | T1 | 3492 | 30 | 260 | 49% | 3497 | 80% |
|  |  | P1 | 3718 | 35 | 200 | 52% | 3704 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3347 | 29 | 312 | 46% | 3378 | 65% |
|  |  | T1 | 3295 | 32 | 248 | 50% | 3298 | 71% |
|  |  | P1 | 3479 | 34 | 222 | 50% | 3479 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3471 | 12 | 1674 | 50% | 3474 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3420 | 12 | 1616 | 50% | 3417 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3189 | 12 | 1708 | 49% | 3198 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3452 | 17 | 800 | 50% | 3449 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3416 | 17 | 828 | 49% | 3418 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3174 | 18 | 872 | 52% | 3133 | 58% |