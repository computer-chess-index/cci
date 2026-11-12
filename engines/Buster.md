# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2222<sub>(+17) | 2531<sub>(-45) | 2678<sub>(+33) |  |
| 7.0.3 | 2026-10-29 | 2205 | 2576 | 2645 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2314<sub>(+53) | 2631<sub>(+39) | 2711<sub>(+76) |  |
| 7.0.3 | 2026-10-29 | 2261 | 2592 | 2635 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2261 | 2592 | 2635 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Buster+<version>&body=###%20Engine%20name%0ABuster%0A%0A###%20Version%0A7.0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:36:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2200 --> 2800
  line "E1: STC (8.0+0.08s)" [2205, 2222]
  line "E1: LTC (60.0+0.60s)" [2576, 2531]
  line "E1: VLTC (2m24s+1.12s)" [2645, 2678]
  line "P1: STC (8.0+0.08s)" [2261, 2314]
  line "P1: LTC (60.0+0.60s)" [2592, 2631]
  line "P1: VLTC (2m24s+1.12s)" [2635, 2711]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2711 | 47 | 152 | 53% | 2681 | 29% |
|  |  | E1 | 2678 | 35 | 274 | 50% | 2681 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2631 | 42 | 180 | 46% | 2666 | 33% |
|  |  | E1 | 2531 | 38 | 232 | 53% | 2499 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2314 | 47 | 152 | 49% | 2327 | 30% |
|  |  | E1 | 2222 | 37 | 240 | 50% | 2226 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2635 | 50 | 140 | 58% | 2537 | 32% |
|  |  | E1 | 2645 | 40 | 220 | 53% | 2600 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2592 | 51 | 148 | 58% | 2435 | 24% |
|  |  | E1 | 2576 | 32 | 352 | 58% | 2475 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2205 | 42 | 208 | 54% | 2144 | 20% |
|  |  | P1 | 2261 | 49 | 160 | 58% | 2132 | 25% |