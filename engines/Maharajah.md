# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2599<sub>(+42) | 2881<sub>(+12) | 3032<sub>(+81) |  |
| 1.4.0 | 2026-11-15 | 2557<sub>(+162) | 2869<sub>(+139) | 2951<sub>(+50) |  |
| 1.3.2 | 2026-11-11 | 2395 | 2730 | 2901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2607<sub>(+51) | 2892<sub>(+38) | 2952<sub>(+12) |  |
| 1.4.0 | 2026-11-15 | 2556<sub>(+214) | 2854<sub>(+50) | 2940<sub>(+218) |  |
| 1.3.2 | 2026-11-11 | 2342 | 2804 | 2722 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2342 | 2804 | 2722 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:40:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2395, 2557, 2599]
  line "E1: LTC (60.0+0.60s)" [2730, 2869, 2881]
  line "E1: VLTC (2m24s+1.12s)" [2901, 2951, 3032]
  line "P1: STC (8.0+0.08s)" [2342, 2556, 2607]
  line "P1: LTC (60.0+0.60s)" [2804, 2854, 2892]
  line "P1: VLTC (2m24s+1.12s)" [2722, 2940, 2952]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2952 | 49 | 136 | 54% | 2915 | 32% |
|  |  | E1 | 3032 | 41 | 188 | 52% | 3016 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2892 | 54 | 108 | 53% | 2863 | 32% |
|  |  | E1 | 2881 | 39 | 208 | 51% | 2873 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2607 | 45 | 164 | 49% | 2616 | 30% |
|  |  | E1 | 2599 | 44 | 180 | 52% | 2581 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2940 | 41 | 178 | 44% | 2996 | 41% |
|  |  | E1 | 2951 | 47 | 144 | 47% | 2984 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2854 | 46 | 152 | 53% | 2823 | 34% |
|  |  | E1 | 2869 | 42 | 190 | 48% | 2890 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2556 | 48 | 148 | 53% | 2522 | 25% |
|  |  | E1 | 2557 | 43 | 180 | 48% | 2577 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2722 | 97 | 40 | 45% | 2638 | 25% |
|  |  | E1 | 2901 | 74 | 64 | 56% | 2808 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2804 | 122 | 36 | 75% | 2375 | 17% |
|  |  | E1 | 2730 | 77 | 62 | 47% | 2759 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2342 | 82 | 56 | 58% | 2237 | 20% |
|  |  | E1 | 2395 | 69 | 86 | 45% | 2468 | 10% |