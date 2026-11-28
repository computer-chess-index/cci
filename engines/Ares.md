# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1967<sub>(+244) | 2234<sub>(+124) | 2433<sub>(+62) |  |
| 1.004 | 2009-10-31 | 1723 | 2110 | 2371 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1929<sub>(+260) | 2246<sub>(+217) | 2375<sub>(+125) |  |
| 1.004 | 2009-10-31 | 1669 | 2029 | 2250 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1974<sub>(+261) | 2331<sub>(+249) | 2454<sub>(+132) |  |
| 1.004 | 2009-10-31 | 1713 | 2082 | 2322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ares+<version>&body=###%20Engine%20name%0AAres%0A%0A###%20Version%0A2.5" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:36:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "E1: STC (8.0+0.08s)" [1723, 1967]
  line "E1: LTC (60.0+0.60s)" [2110, 2234]
  line "E1: VLTC (2m24s+1.12s)" [2371, 2433]
  line "P1: STC (8.0+0.08s)" [1669, 1929]
  line "P1: LTC (60.0+0.60s)" [2029, 2246]
  line "P1: VLTC (2m24s+1.12s)" [2250, 2375]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1713, 1974]
  line "T1: LTC (60.0+0.60s)" [2082, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2322, 2454]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2454 | 27 | 458 | 50% | 2452 | 26% |
|  |  | P1 | 2375 | 35 | 300 | 45% | 2446 | 24% |
|  |  | E1 | 2433 | 33 | 340 | 49% | 2449 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2246 | 33 | 318 | 51% | 2244 | 27% |
|  |  | E1 | 2234 | 33 | 340 | 50% | 2240 | 22% |
|  |  | T1 | 2331 | 24 | 588 | 52% | 2311 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1929 | 37 | 256 | 54% | 1889 | 22% |
|  |  | E1 | 1967 | 30 | 390 | 50% | 1978 | 22% |
|  |  | T1 | 1974 | 22 | 770 | 51% | 1963 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2322 | 45 | 176 | 47% | 2388 | 27% |
|  |  | P1 | 2250 | 56 | 112 | 48% | 2277 | 23% |
|  |  | E1 | 2371 | 69 | 76 | 44% | 2450 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2029 | 56 | 126 | 41% | 2132 | 16% |
|  |  | T1 | 2082 | 79 | 60 | 49% | 2097 | 15% |
|  |  | E1 | 2110 | 52 | 140 | 46% | 2179 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1669 | 59 | 104 | 42% | 1786 | 25% |
|  |  | T1 | 1713 | 50 | 184 | 33% | 2012 | 14% |
|  |  | E1 | 1723 | 66 | 94 | 40% | 1893 | 19% |