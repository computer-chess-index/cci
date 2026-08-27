# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2876<sub>(+15) | 3139<sub>(+74) | 3231<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2861<sub>(+255) | 3065<sub>(+293) | 3164<sub>(+225) |  |
| 1.2 | 2025-12-12 | 2606<sub>(+284) | 2772<sub>(+171) | 2939<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2322 | 2601 | 2676 | too many irregular games |
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

Generated: 2026-08-27 06:23:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2322, 2606, 2861, 2876]
  line "STC (8.0+0.08s)" [2322, 2606, 2861, 2876]
  line "LTC (60.0+0.60s)" [2601, 2772, 3065, 3139]
  line "VLTC (2m24s+1.12s)" [2676, 2939, 3164, 3231]
  line "VLTC (2m24s+1.12s)" [2676, 2939, 3164, 3231]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 41 | 160 | 53% | 3212 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3139 | 43 | 164 | 51% | 3129 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2876 | 44 | 156 | 49% | 2886 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 100 | 26 | 56% | 3123 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3065 | 75 | 52 | 46% | 3089 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2861 | 123 | 22 | 52% | 2838 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2939 | 158 | 12 | 46% | 2975 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 79 | 52 | 52% | 2755 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2606 | 150 | 16 | 63% | 2485 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2676 | 101 | 32 | 33% | 2819 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2601 | 145 | 16 | 41% | 2687 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2322 | 71 | 70 | 41% | 2399 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |