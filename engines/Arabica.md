# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2812<sub>(-14) | 3147<sub>(-13) | 3268<sub>(-7) |  |
| 0.4.1 | 2026-11-01 | 2826 | 3160 | 3275 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2870<sub>(+74) | 3206<sub>(+40) | 3258<sub>(+40) |  |
| 0.4.1 | 2026-11-01 | 2796 | 3166 | 3218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2796 | 3166 | 3218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:35:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2826, 2812]
  line "E1: LTC (60.0+0.60s)" [3160, 3147]
  line "E1: VLTC (2m24s+1.12s)" [3275, 3268]
  line "P1: STC (8.0+0.08s)" [2796, 2870]
  line "P1: LTC (60.0+0.60s)" [3166, 3206]
  line "P1: VLTC (2m24s+1.12s)" [3218, 3258]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 51 | 106 | 50% | 3258 | 55% |
|  |  | E1 | 3268 | 34 | 244 | 49% | 3279 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3206 | 49 | 112 | 52% | 3193 | 55% |
|  |  | E1 | 3147 | 43 | 156 | 49% | 3158 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2870 | 46 | 140 | 56% | 2819 | 44% |
|  |  | E1 | 2812 | 38 | 210 | 46% | 2847 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3218 | 34 | 240 | 51% | 3197 | 57% |
|  |  | E1 | 3275 | 32 | 270 | 51% | 3258 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3166 | 35 | 240 | 53% | 3112 | 53% |
|  |  | E1 | 3160 | 29 | 358 | 56% | 3087 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 38 | 224 | 52% | 2747 | 38% |
|  |  | E1 | 2826 | 30 | 384 | 57% | 2723 | 33% |