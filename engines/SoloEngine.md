# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2322<sub>(+99) | 2665<sub>(+145) | 2807<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2223<sub>(+157) | 2520<sub>(+135) | 2657<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2066<sub>(+268) | 2385<sub>(+255) | 2495<sub>(+240) |  |
| 1.4.0 | 2026-02-07 | 1798<sub>(+139) | 2130<sub>(+109) | 2255<sub>(+134) |  |
| 1.3.1 | 2026-02-01 | 1659<sub>(-26) | 2021<sub>(+18) | 2121<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1685 | 2003 | 2070 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-14 06:28:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 2900
  line "STC (8.0+0.08s)" [1685, 1659, 1798, 2066, 2223, 2322]
  line "STC (8.0+0.08s)" [1685, 1659, 1798, 2066, 2223, 2322]
  line "LTC (60.0+0.60s)" [2003, 2021, 2130, 2385, 2520, 2665]
  line "VLTC (2m24s+1.12s)" [2070, 2121, 2255, 2495, 2657, 2807]
  line "VLTC (2m24s+1.12s)" [2070, 2121, 2255, 2495, 2657, 2807]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2807 | 27 | 436 | 52% | 2789 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2665 | 31 | 328 | 49% | 2670 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2322 | 31 | 348 | 52% | 2306 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2657 | 34 | 280 | 50% | 2653 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2520 | 32 | 332 | 51% | 2508 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2223 | 35 | 288 | 49% | 2241 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 30 | 380 | 48% | 2514 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2385 | 37 | 252 | 52% | 2369 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2066 | 35 | 288 | 54% | 2025 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2255 | 36 | 264 | 49% | 2264 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2130 | 40 | 206 | 53% | 2109 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1798 | 43 | 180 | 51% | 1789 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2121 | 40 | 204 | 52% | 2106 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2021 | 46 | 164 | 51% | 2016 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1659 | 42 | 208 | 47% | 1686 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 38 | 260 | 46% | 2140 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2003 | 43 | 204 | 46% | 2067 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1685 | 41 | 232 | 47% | 1742 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |