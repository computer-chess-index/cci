# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-09-24 | 2846<sub>(+78) | 3146<sub>(+114) | 3229<sub>(+119) |  |
| 1.5 | 2026-01-22 | 2768<sub>(+111) | 3032<sub>(+108) | 3110<sub>(+145) |  |
| 1.4 | 2025-11-11 | 2657 | 2924 | 2965 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:44:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2657, 2768, 2846]
  line "STC (8.0+0.08s)" [2657, 2768, 2846]
  line "LTC (60.0+0.60s)" [2924, 3032, 3146]
  line "" [2965, 3110, 3229]
  line "VLTC (2m24s+1.12s)" [2965, 3110, 3229]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 37 | 196 | 46% | 3256 | 57% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 41 | 160 | 53% | 3120 | 57% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2846 | 47 | 124 | 54% | 2816 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3110 | 22 | 592 | 49% | 3120 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3032 | 24 | 466 | 48% | 3050 | 54% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2768 | 22 | 630 | 50% | 2763 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2965 | 34 | 260 | 52% | 2948 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2924 | 30 | 336 | 56% | 2866 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2657 | 36 | 264 | 53% | 2619 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |