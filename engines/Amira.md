# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2306<sub>(+108) | 2539<sub>(+101) | 2635<sub>(+156) |  |
| 1.71 | 2025-10-30 | 2198<sub>(+new) | 2438<sub>(+new) | 2479<sub>(+new) |  |
| 1.61 | 2025-09-08 |  |  |  |  |
| 1.4 | 2025-07-24 |  |  |  |  |
| 1.00 | 2025-06-29 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Amira+<version>&body=###%20Engine%20name%0AAmira%0A%0A###%20Version%0A1.82" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:22:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "STC (8.0+0.08s)" [2198, 2306]
  line "STC (8.0+0.08s)" [2198, 2306]
  line "LTC (60.0+0.60s)" [2438, 2539]
  line "VLTC (2m24s+1.12s)" [2479, 2635]
  line "VLTC (2m24s+1.12s)" [2479, 2635]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | 2635 | 25 | 546 | 48% | 2653 | 29% |
| 1.82 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 29 | 420 | 50% | 2530 | 24% |
| 1.82 | STC <sub>(8.0+0.08s)</sub> | 2306 | 25 | 550 | 50% | 2295 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | 2479 | 40 | 220 | 51% | 2469 | 21% |
| 1.71 | LTC <sub>(60.0+0.60s)</sub> | 2438 | 39 | 248 | 52% | 2427 | 17% |
| 1.71 | STC <sub>(8.0+0.08s)</sub> | 2198 | 43 | 206 | 51% | 2188 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |