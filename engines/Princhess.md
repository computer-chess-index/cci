# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2913<sub>(+89) | 3150<sub>(+63) | 3209<sub>(+76) |  |
| 0.21.0 | 2025-10-13 | 2824 | 3087 | 3133 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2862<sub>(+35) | 3119<sub>(+75) | 3190<sub>(+58) |  |
| 0.21.0 | 2025-10-13 | 2827 | 3044 | 3132 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2873<sub>(+29) | 3105<sub>(+19) | 3177<sub>(+54) |  |
| 0.21.0 | 2025-10-13 | 2844 | 3086 | 3123 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:41:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2824, 2913]
  line "E1: LTC (60.0+0.60s)" [3087, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3133, 3209]
  line "P1: STC (8.0+0.08s)" [2827, 2862]
  line "P1: LTC (60.0+0.60s)" [3044, 3119]
  line "P1: VLTC (2m24s+1.12s)" [3132, 3190]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "T1: STC (8.0+0.08s)" [2844, 2873]
  line "T1: LTC (60.0+0.60s)" [3086, 3105]
  line "T1: VLTC (2m24s+1.12s)" [3123, 3177]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3190 | 28 | 346 | 51% | 3182 | 57% |
|  |  | E1 | 3209 | 25 | 434 | 50% | 3209 | 53% |
|  |  | T1 | 3177 | 33 | 256 | 50% | 3174 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3119 | 32 | 288 | 49% | 3136 | 51% |
|  |  | E1 | 3150 | 25 | 438 | 51% | 3141 | 52% |
|  |  | T1 | 3105 | 30 | 308 | 50% | 3106 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2913 | 26 | 438 | 49% | 2921 | 40% |
|  |  | T1 | 2873 | 32 | 296 | 49% | 2885 | 41% |
|  |  | P1 | 2862 | 30 | 336 | 50% | 2861 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3123 | 24 | 504 | 50% | 3124 | 51% |
|  |  | P1 | 3132 | 64 | 76 | 56% | 3027 | 46% |
|  |  | E1 | 3133 | 60 | 90 | 57% | 3033 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3086 | 23 | 542 | 50% | 3082 | 50% |
|  |  | P1 | 3044 | 67 | 78 | 55% | 2917 | 31% |
|  |  | E1 | 3087 | 60 | 88 | 57% | 3019 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2844 | 21 | 728 | 51% | 2834 | 38% |
|  |  | P1 | 2827 | 60 | 88 | 55% | 2728 | 38% |
|  |  | E1 | 2824 | 59 | 102 | 51% | 2824 | 29% |