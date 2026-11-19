# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-11-15 | 2553<sub>(+158) | 2866<sub>(+140) | 2951<sub>(+53) |  |
| 1.3.2 | 2026-11-11 | 2395 | 2726 | 2898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-11-15 | 2566<sub>(+237) | 2843<sub>(+51) | 2947<sub>(+233) |  |
| 1.3.2 | 2026-11-11 | 2329 | 2792 | 2714 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2329 | 2792 | 2714 |  |
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

Generated: 2026-11-19 05:40:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2395, 2553]
  line "E1: LTC (60.0+0.60s)" [2726, 2866]
  line "E1: VLTC (2m24s+1.12s)" [2898, 2951]
  line "P1: STC (8.0+0.08s)" [2329, 2566]
  line "P1: LTC (60.0+0.60s)" [2792, 2843]
  line "P1: VLTC (2m24s+1.12s)" [2714, 2947]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2947 | 46 | 144 | 45% | 2990 | 41% |
|  |  | E1 | 2951 | 49 | 136 | 47% | 2981 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2843 | 48 | 136 | 54% | 2808 | 35% |
|  |  | E1 | 2866 | 42 | 190 | 48% | 2886 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2566 | 52 | 128 | 56% | 2506 | 26% |
|  |  | E1 | 2553 | 43 | 180 | 48% | 2573 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2714 | 97 | 40 | 45% | 2642 | 25% |
|  |  | E1 | 2898 | 74 | 64 | 56% | 2805 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2792 | 121 | 36 | 75% | 2373 | 17% |
|  |  | E1 | 2726 | 77 | 62 | 47% | 2755 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2329 | 81 | 56 | 58% | 2222 | 20% |
|  |  | E1 | 2395 | 69 | 86 | 45% | 2468 | 10% |