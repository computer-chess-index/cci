# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2097<sub>(-89) | 2793<sub>(-273) | 3023<sub>(-136) |  |
| 0.29.0 | 2022-12-13 | 2186 | 3066 | 3159 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2142<sub>(-149) | 2877<sub>(-62) | 3060<sub>(+9) |  |
| 0.29.0 | 2022-12-13 | 2291 | 2939 | 3051 |  |
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

Generated: 2026-11-14 05:39:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2186, 2097]
  line "E1: LTC (60.0+0.60s)" [3066, 2793]
  line "E1: VLTC (2m24s+1.12s)" [3159, 3023]
  line "P1: STC (8.0+0.08s)" [2291, 2142]
  line "P1: LTC (60.0+0.60s)" [2939, 2877]
  line "P1: VLTC (2m24s+1.12s)" [3051, 3060]
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
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3178 | 22 | 556 | 48% | 3193 | 53% |
|  |  | P1 | 3060 | 36 | 220 | 54% | 3013 | 53% |
|  |  | E1 | 3023 | 25 | 490 | 56% | 2965 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2877 | 35 | 258 | 48% | 2890 | 37% |
|  |  | E1 | 2793 | 28 | 412 | 51% | 2765 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2142 | 35 | 284 | 43% | 2211 | 30% |
|  |  | E1 | 2097 | 30 | 430 | 40% | 2205 | 20% |
|  |  | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3051 | 115 | 28 | 73% | 2776 | 46% |
|  |  | E1 | 3159 | 87 | 44 | 64% | 2982 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2939 | 109 | 40 | 74% | 2485 | 23% |
|  |  | E1 | 3066 | 96 | 40 | 64% | 2757 | 43% |
|  |  | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2291 | 95 | 46 | 59% | 2215 | 22% |
|  |  | E1 | 2186 | 89 | 56 | 46% | 2307 | 16% |
|  |  | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |