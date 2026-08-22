# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2873<sub>(+15) | 3136<sub>(+74) | 3228<sub>(+66) |  |
| 1.3 | 2026-02-15 | 2858<sub>(+255) | 3062<sub>(+293) | 3162<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2603<sub>(+284) | 2769<sub>(+170) | 2936<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2319 | 2599 | 2673 | too many irregular games |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:23:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2319, 2603, 2858, 2873]
  line "STC (8.0+0.08s)" [2319, 2603, 2858, 2873]
  line "LTC (60.0+0.60s)" [2599, 2769, 3062, 3136]
  line "VLTC (2m24s+1.12s)" [2673, 2936, 3162, 3228]
  line "VLTC (2m24s+1.12s)" [2673, 2936, 3162, 3228]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3228 | 41 | 160 | 53% | 3209 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 43 | 164 | 51% | 3127 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2873 | 44 | 156 | 49% | 2884 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 100 | 26 | 56% | 3120 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3062 | 75 | 52 | 46% | 3086 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2858 | 123 | 22 | 52% | 2835 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 158 | 12 | 46% | 2973 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2769 | 79 | 52 | 52% | 2753 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2603 | 150 | 16 | 63% | 2483 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 101 | 32 | 33% | 2816 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2599 | 145 | 16 | 41% | 2684 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2319 | 71 | 70 | 41% | 2396 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |