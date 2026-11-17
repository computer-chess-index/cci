# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2529<sub>(+76) | 2817<sub>(+13) | 2909<sub>(+50) |  |
| 3.0 | 2026-01-17 | 2453 | 2804 | 2859 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2480<sub>(+147) | 2770<sub>(-11) | 2816<sub>(+40) |  |
| 3.0 | 2026-01-17 | 2333 | 2781 | 2776 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+35) | 2807<sub>(+45) | 2894<sub>(+86) |  |
| 3.0 | 2026-01-17 | 2476 | 2762 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:37:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2453, 2529]
  line "E1: LTC (60.0+0.60s)" [2804, 2817]
  line "E1: VLTC (2m24s+1.12s)" [2859, 2909]
  line "P1: STC (8.0+0.08s)" [2333, 2480]
  line "P1: LTC (60.0+0.60s)" [2781, 2770]
  line "P1: VLTC (2m24s+1.12s)" [2776, 2816]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "T1: STC (8.0+0.08s)" [2476, 2511]
  line "T1: LTC (60.0+0.60s)" [2762, 2807]
  line "T1: VLTC (2m24s+1.12s)" [2808, 2894]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2816 | 32 | 316 | 49% | 2827 | 36% |
|  |  | E1 | 2909 | 26 | 464 | 49% | 2905 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2770 | 34 | 318 | 58% | 2583 | 30% |
|  |  | E1 | 2817 | 28 | 436 | 50% | 2801 | 33% |
|  |  | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2480 | 36 | 264 | 49% | 2493 | 33% |
|  |  | E1 | 2529 | 30 | 374 | 49% | 2535 | 34% |
|  |  | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2776 | 73 | 68 | 51% | 2687 | 35% |
|  |  | E1 | 2859 | 68 | 76 | 53% | 2822 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2781 | 77 | 58 | 53% | 2738 | 33% |
|  |  | E1 | 2804 | 59 | 118 | 65% | 2597 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2333 | 79 | 74 | 55% | 2155 | 19% |
|  |  | E1 | 2453 | 57 | 112 | 52% | 2427 | 25% |