# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2561<sub>(-51) | 2878<sub>(-2) | 2985<sub>(-38) |  |
| 1.4.1 | 2026-11-17 | 2612<sub>(+54) | 2880<sub>(+13) | 3023<sub>(+71) |  |
| 1.4.0 | 2026-11-15 | 2558<sub>(+160) | 2867<sub>(+141) | 2952<sub>(+51) |  |
| 1.3.2 | 2026-11-11 | 2398 | 2726 | 2901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2635<sub>(+8) | 2911<sub>(+21) | 2827<sub>(-135) |  |
| 1.4.1 | 2026-11-17 | 2627<sub>(+43) | 2890<sub>(+10) | 2962<sub>(+3) |  |
| 1.4.0 | 2026-11-15 | 2584<sub>(+235) | 2880<sub>(+63) | 2959<sub>(+216) |  |
| 1.3.2 | 2026-11-11 | 2349 | 2817 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2349 | 2817 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:40:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2398, 2558, 2612, 2561]
  line "E1: LTC (60.0+0.60s)" [2726, 2867, 2880, 2878]
  line "E1: VLTC (2m24s+1.12s)" [2901, 2952, 3023, 2985]
  line "P1: STC (8.0+0.08s)" [2349, 2584, 2627, 2635]
  line "P1: LTC (60.0+0.60s)" [2817, 2880, 2890, 2911]
  line "P1: VLTC (2m24s+1.12s)" [2743, 2959, 2962, 2827]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2827 | 93 | 38 | 53% | 2801 | 26% |
|  |  | E1 | 2985 | 35 | 258 | 54% | 2944 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2911 | 62 | 80 | 51% | 2894 | 35% |
|  |  | E1 | 2878 | 37 | 248 | 51% | 2866 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2635 | 58 | 100 | 52% | 2622 | 25% |
|  |  | E1 | 2561 | 45 | 164 | 52% | 2537 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2962 | 40 | 198 | 52% | 2946 | 31% |
|  |  | E1 | 3023 | 40 | 200 | 51% | 3012 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 49 | 138 | 50% | 2888 | 28% |
|  |  | E1 | 2880 | 37 | 236 | 51% | 2870 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2627 | 41 | 192 | 49% | 2633 | 30% |
|  |  | E1 | 2612 | 40 | 224 | 53% | 2585 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2959 | 41 | 178 | 44% | 3015 | 41% |
|  |  | E1 | 2952 | 47 | 148 | 48% | 2978 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2880 | 45 | 160 | 54% | 2844 | 34% |
|  |  | E1 | 2867 | 41 | 198 | 48% | 2885 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2584 | 47 | 152 | 54% | 2541 | 25% |
|  |  | E1 | 2558 | 43 | 184 | 48% | 2576 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2743 | 98 | 40 | 45% | 2658 | 25% |
|  |  | E1 | 2901 | 74 | 64 | 56% | 2807 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2817 | 122 | 36 | 75% | 2387 | 17% |
|  |  | E1 | 2726 | 77 | 62 | 47% | 2757 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2349 | 82 | 56 | 58% | 2242 | 20% |
|  |  | E1 | 2398 | 69 | 86 | 45% | 2471 | 10% |