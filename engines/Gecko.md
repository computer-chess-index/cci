# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2599<sub>(+106) | 2939<sub>(+73) | 3017<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2493<sub>(+16) | 2866<sub>(+120) | 2916<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2477<sub>(+87) | 2746<sub>(+95) | 2824<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2390<sub>(+515) | 2651<sub>(+591) | 2709<sub>(+560) |  |
| 0.08 | 2026-02-05 | 1875 | 2060 | 2149 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:24:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1875, 2390, 2477, 2493, 2599]
  line "STC (8.0+0.08s)" [1875, 2390, 2477, 2493, 2599]
  line "LTC (60.0+0.60s)" [2060, 2651, 2746, 2866, 2939]
  line "VLTC (2m24s+1.12s)" [2149, 2709, 2824, 2916, 3017]
  line "VLTC (2m24s+1.12s)" [2149, 2709, 2824, 2916, 3017]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 29 | 356 | 52% | 3005 | 46% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 31 | 312 | 49% | 2944 | 48% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2599 | 33 | 312 | 50% | 2601 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 32 | 304 | 51% | 2908 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 336 | 49% | 2876 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2493 | 36 | 280 | 50% | 2489 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 31 | 328 | 51% | 2819 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 32 | 312 | 50% | 2747 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2477 | 31 | 356 | 51% | 2468 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2709 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2651 | 36 | 228 | 57% | 2588 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2390 | 37 | 236 | 55% | 2344 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 28 | 392 | 46% | 2199 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2060 | 29 | 384 | 48% | 2087 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1875 | 31 | 356 | 48% | 1899 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |