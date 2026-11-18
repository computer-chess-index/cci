# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-11-15 | 2554<sub>(+160) | 2863<sub>(+137) | 2966<sub>(+68) |  |
| 1.3.2 | 2026-11-11 | 2394 | 2726 | 2898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-11-15 | 2461<sub>(+134) | 2808<sub>(+16) | 3008<sub>(+293) |  |
| 1.3.2 | 2026-11-11 | 2327 | 2792 | 2715 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2327 | 2792 | 2715 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:40:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2394, 2554]
  line "E1: LTC (60.0+0.60s)" [2726, 2863]
  line "E1: VLTC (2m24s+1.12s)" [2898, 2966]
  line "P1: STC (8.0+0.08s)" [2327, 2461]
  line "P1: LTC (60.0+0.60s)" [2792, 2808]
  line "P1: VLTC (2m24s+1.12s)" [2715, 3008]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3008 | 65 | 72 | 50% | 3005 | 39% |
|  |  | E1 | 2966 | 53 | 112 | 50% | 2965 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2808 | 60 | 88 | 51% | 2796 | 32% |
|  |  | E1 | 2863 | 44 | 170 | 47% | 2889 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2461 | 106 | 32 | 53% | 2426 | 13% |
|  |  | E1 | 2554 | 48 | 144 | 47% | 2580 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2715 | 97 | 40 | 45% | 2643 | 25% |
|  |  | E1 | 2898 | 74 | 64 | 56% | 2805 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2792 | 121 | 36 | 75% | 2373 | 17% |
|  |  | E1 | 2726 | 77 | 62 | 47% | 2755 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2394 | 69 | 86 | 45% | 2466 | 10% |
|  |  | P1 | 2327 | 81 | 56 | 58% | 2221 | 20% |