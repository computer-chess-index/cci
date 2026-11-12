# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2466<sub>(-25) | 2780<sub>(+69) | 2892<sub>(+214) |  |
| 1.0 | 2025-10-19 | 2491 | 2711 | 2678 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2499<sub>(-391) | 2861<sub>(-29) | 2931<sub>(-26) |  |
| 1.0 | 2025-10-19 | 2890 | 2890 | 2957 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2473<sub>(-370) | 2758<sub>(-359) | 2830<sub>(-313) |  |
| 1.0 | 2025-10-19 | 2843 | 3117 | 3143 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:41:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2491, 2466]
  line "E1: LTC (60.0+0.60s)" [2711, 2780]
  line "E1: VLTC (2m24s+1.12s)" [2678, 2892]
  line "P1: STC (8.0+0.08s)" [2890, 2499]
  line "P1: LTC (60.0+0.60s)" [2890, 2861]
  line "P1: VLTC (2m24s+1.12s)" [2957, 2931]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "T1: STC (8.0+0.08s)" [2843, 2473]
  line "T1: LTC (60.0+0.60s)" [3117, 2758]
  line "T1: VLTC (2m24s+1.12s)" [3143, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  |  | P1 | 2931 | 40 | 220 | 52% | 2898 | 30% |
|  |  | E1 | 2892 | 28 | 416 | 51% | 2846 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  |  | P1 | 2861 | 41 | 204 | 48% | 2886 | 32% |
|  |  | E1 | 2780 | 29 | 388 | 54% | 2709 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
|  |  | P1 | 2499 | 37 | 252 | 46% | 2535 | 30% |
|  |  | E1 | 2466 | 33 | 334 | 49% | 2473 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2957 | 232 | 8 | 100% | 2534 | 0% |
|  |  | E1 | 2678 | 229 | 4 | 13% | 2885 | 25% |
|  |  | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 262 | 4 | 100% | 2577 | 0% |
|  |  | E1 | 2711 | 202 | 6 | 17% | 2931 | 33% |
|  |  | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2491 | 257 | 4 | 88% | 2241 | 25% |
|  |  | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |
|  |  | P1 | 2890 | 262 | 4 | 100% | 2577 | 0% |