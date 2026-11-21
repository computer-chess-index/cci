# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2082<sub>(-162) | 2803<sub>(-229) | 3029<sub>(-153) |  |
| 0.29.0 | 2022-12-13 | 2244 | 3032 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2171<sub>(-106) | 2916<sub>(-63) | 3081<sub>(-62) |  |
| 0.29.0 | 2022-12-13 | 2277 | 2979 | 3143 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2408<sub>(+24) | 3015<sub>(+11) | 3178<sub>(-62) |  |
| 0.29.0 | 2022-12-13 | 2384 | 3004 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:39:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2244, 2082]
  line "E1: LTC (60.0+0.60s)" [3032, 2803]
  line "E1: VLTC (2m24s+1.12s)" [3182, 3029]
  line "P1: STC (8.0+0.08s)" [2277, 2171]
  line "P1: LTC (60.0+0.60s)" [2979, 2916]
  line "P1: VLTC (2m24s+1.12s)" [3143, 3081]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2384, 2408]
  line "T1: LTC (60.0+0.60s)" [3004, 3015]
  line "T1: VLTC (2m24s+1.12s)" [3240, 3178]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3029 | 24 | 530 | 55% | 2974 | 45% |
|  |  | T1 | 3178 | 22 | 556 | 48% | 3193 | 53% |
|  |  | P1 | 3081 | 35 | 234 | 54% | 3036 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2803 | 27 | 444 | 52% | 2769 | 36% |
|  |  | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2916 | 32 | 310 | 49% | 2923 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2171 | 34 | 304 | 43% | 2234 | 30% |
|  |  | E1 | 2082 | 29 | 486 | 39% | 2228 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3182 | 59 | 88 | 56% | 3101 | 48% |
|  |  | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3143 | 70 | 68 | 63% | 2994 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  |  | P1 | 2979 | 60 | 100 | 59% | 2795 | 33% |
|  |  | E1 | 3032 | 61 | 84 | 53% | 2870 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |
|  |  | P1 | 2277 | 55 | 118 | 50% | 2279 | 25% |
|  |  | E1 | 2244 | 54 | 128 | 51% | 2271 | 24% |