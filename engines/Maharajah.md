# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2569<sub>(-43) | 2877<sub>(-3) | 2986<sub>(-37) |  |
| 1.4.1 | 2026-11-17 | 2612<sub>(+54) | 2880<sub>(+14) | 3023<sub>(+69) |  |
| 1.4.0 | 2026-11-15 | 2558<sub>(+160) | 2866<sub>(+140) | 2954<sub>(+54) |  |
| 1.3.2 | 2026-11-11 | 2398 | 2726 | 2900 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2635<sub>(+8) | 2888<sub>(-2) | 2827<sub>(-134) |  |
| 1.4.1 | 2026-11-17 | 2627<sub>(+43) | 2890<sub>(+10) | 2961<sub>(+3) |  |
| 1.4.0 | 2026-11-15 | 2584<sub>(+235) | 2880<sub>(+61) | 2958<sub>(+215) |  |
| 1.3.2 | 2026-11-11 | 2349 | 2819 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2349 | 2819 | 2743 |  |
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

Generated: 2026-11-26 05:40:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2398, 2558, 2612, 2569]
  line "E1: LTC (60.0+0.60s)" [2726, 2866, 2880, 2877]
  line "E1: VLTC (2m24s+1.12s)" [2900, 2954, 3023, 2986]
  line "P1: STC (8.0+0.08s)" [2349, 2584, 2627, 2635]
  line "P1: LTC (60.0+0.60s)" [2819, 2880, 2890, 2888]
  line "P1: VLTC (2m24s+1.12s)" [2743, 2958, 2961, 2827]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2986 | 36 | 242 | 55% | 2942 | 35% |
|  |  | P1 | 2827 | 93 | 38 | 53% | 2803 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2888 | 104 | 28 | 54% | 2849 | 36% |
|  |  | E1 | 2877 | 41 | 208 | 52% | 2861 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2635 | 58 | 100 | 52% | 2622 | 25% |
|  |  | E1 | 2569 | 47 | 148 | 54% | 2534 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2961 | 40 | 198 | 52% | 2944 | 31% |
|  |  | E1 | 3023 | 40 | 200 | 51% | 3012 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 49 | 138 | 50% | 2888 | 28% |
|  |  | E1 | 2880 | 37 | 236 | 51% | 2870 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2627 | 41 | 192 | 49% | 2633 | 30% |
|  |  | E1 | 2612 | 40 | 224 | 53% | 2587 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2954 | 47 | 148 | 48% | 2978 | 34% |
|  |  | P1 | 2958 | 41 | 178 | 44% | 3012 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2880 | 45 | 160 | 54% | 2844 | 34% |
|  |  | E1 | 2866 | 41 | 198 | 48% | 2884 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2584 | 47 | 152 | 54% | 2541 | 25% |
|  |  | E1 | 2558 | 43 | 184 | 48% | 2574 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2743 | 98 | 40 | 45% | 2658 | 25% |
|  |  | E1 | 2900 | 74 | 64 | 56% | 2807 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2819 | 122 | 36 | 75% | 2387 | 17% |
|  |  | E1 | 2726 | 77 | 62 | 47% | 2757 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2349 | 82 | 56 | 58% | 2241 | 20% |
|  |  | E1 | 2398 | 69 | 86 | 45% | 2471 | 10% |