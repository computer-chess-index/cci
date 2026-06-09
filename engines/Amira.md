# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2291<sub>(+112) | 2520<sub>(+99) | 2619<sub>(+158) |  |
| 1.71 | 2025-10-30 | 2179<sub>(+new) | 2421<sub>(+new) | 2461<sub>(+new) |  |
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

Generated: 2026-06-09 06:22:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "STC (8.0+0.08s)" [2179, 2291]
  line "STC (8.0+0.08s)" [2179, 2291]
  line "LTC (60.0+0.60s)" [2421, 2520]
  line "VLTC (2m24s+1.12s)" [2461, 2619]
  line "VLTC (2m24s+1.12s)" [2461, 2619]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | 2619 | 25 | 554 | 48% | 2634 | 30% |
| 1.82 | LTC <sub>(60.0+0.60s)</sub> | 2520 | 29 | 424 | 50% | 2512 | 24% |
| 1.82 | STC <sub>(8.0+0.08s)</sub> | 2291 | 25 | 554 | 51% | 2277 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | 2461 | 40 | 220 | 51% | 2452 | 21% |
| 1.71 | LTC <sub>(60.0+0.60s)</sub> | 2421 | 39 | 248 | 52% | 2410 | 17% |
| 1.71 | STC <sub>(8.0+0.08s)</sub> | 2179 | 43 | 206 | 51% | 2169 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |