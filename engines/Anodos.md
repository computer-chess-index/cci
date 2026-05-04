# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2201<sub>(+168) | 2481<sub>(+127) | 2542<sub>(+103) |  |
| 1.2.0 | 2026-02-01 | 2033<sub>(+201) | 2354<sub>(+283) | 2439<sub>(+241) |  |
| 1.1.0 | 2026-01-16 | 1832<sub>(+57) | 2071<sub>(+66) | 2198<sub>(+130) |  |
| 1.0.0 | 2026-01-02 | 1775<sub>(+new) | 2005<sub>(+new) | 2068<sub>(+new) | Previously: chess-rs |
| 0.7.0 | 2025-12-31 |  |  |  |  |
| 0.6.0 | 2025-11-11 |  |  |  |  |
| 0.5.1 | 2025-11-04 |  |  |  |  |
| 0.5.0 | 2025-11-03 |  |  |  |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:22:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2600
  line "STC (8.0+0.08s)" [1775, 1832, 2033, 2201]
  line "STC (8.0+0.08s)" [1775, 1832, 2033, 2201]
  line "LTC (60.0+0.60s)" [2005, 2071, 2354, 2481]
  line "VLTC (2m24s+1.12s)" [2068, 2198, 2439, 2542]
  line "VLTC (2m24s+1.12s)" [2068, 2198, 2439, 2542]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2542 | 30 | 394 | 49% | 2547 | 24% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2481 | 29 | 400 | 52% | 2466 | 28% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2201 | 27 | 460 | 48% | 2218 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 38 | 244 | 52% | 2419 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2354 | 41 | 196 | 49% | 2364 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2033 | 45 | 176 | 52% | 2016 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2198 | 37 | 256 | 51% | 2184 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2071 | 44 | 180 | 50% | 2070 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1832 | 40 | 228 | 50% | 1836 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2068 | 45 | 192 | 44% | 2164 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 49 | 156 | 48% | 2002 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1775 | 45 | 180 | 46% | 1825 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |