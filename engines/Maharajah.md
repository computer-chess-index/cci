# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-11-21 | 2566<sub>(-44) | 2878<sub>(-7) | 2932<sub>(-97) |  |
| 1.4.1 | 2026-11-17 | 2610<sub>(+49) | 2885<sub>(+12) | 3029<sub>(+68) |  |
| 1.4.0 | 2026-11-15 | 2561<sub>(+165) | 2873<sub>(+141) | 2961<sub>(+57) |  |
| 1.3.2 | 2026-11-11 | 2396 | 2732 | 2904 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2627<sub>(+43) | 2889<sub>(+11) | 2961<sub>(+3) |  |
| 1.4.0 | 2026-11-15 | 2584<sub>(+235) | 2878<sub>(+61) | 2958<sub>(+215) |  |
| 1.3.2 | 2026-11-11 | 2349 | 2817 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2349 | 2817 | 2743 |  |
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

Generated: 2026-11-25 05:40:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2396, 2561, 2610, 2566]
  line "E1: LTC (60.0+0.60s)" [2732, 2873, 2885, 2878]
  line "E1: VLTC (2m24s+1.12s)" [2904, 2961, 3029, 2932]
  line "P1: STC (8.0+0.08s)" [2349, 2584, 2627]
  line "P1: LTC (60.0+0.60s)" [2817, 2878, 2889]
  line "P1: VLTC (2m24s+1.12s)" [2743, 2958, 2961]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2932 | 65 | 78 | 54% | 2890 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2878 | 54 | 120 | 52% | 2858 | 23% |
|  |  | P1 | 2897 | 233 | 4 | 50% | 2897 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2566 | 53 | 120 | 54% | 2526 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2961 | 40 | 198 | 52% | 2944 | 31% |
|  |  | E1 | 3029 | 40 | 200 | 51% | 3017 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2889 | 49 | 138 | 50% | 2886 | 28% |
|  |  | E1 | 2885 | 37 | 236 | 51% | 2876 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2627 | 41 | 192 | 49% | 2633 | 30% |
|  |  | E1 | 2610 | 41 | 212 | 52% | 2587 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2961 | 47 | 148 | 48% | 2985 | 34% |
|  |  | P1 | 2958 | 41 | 178 | 44% | 3013 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2873 | 41 | 198 | 48% | 2890 | 30% |
|  |  | P1 | 2878 | 45 | 160 | 54% | 2843 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2561 | 43 | 184 | 48% | 2577 | 28% |
|  |  | P1 | 2584 | 47 | 152 | 54% | 2541 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2743 | 98 | 40 | 45% | 2658 | 25% |
|  |  | E1 | 2904 | 74 | 64 | 56% | 2811 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2817 | 122 | 36 | 75% | 2387 | 17% |
|  |  | E1 | 2732 | 77 | 62 | 47% | 2762 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2349 | 82 | 56 | 58% | 2242 | 20% |
|  |  | E1 | 2396 | 69 | 86 | 45% | 2469 | 10% |