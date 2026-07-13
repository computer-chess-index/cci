# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2869<sub>(+new) | 3129<sub>(+new) | 3221<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2858<sub>(+257) | 3056<sub>(+290) | 3156<sub>(+222) |  |
| 1.2 | 2025-12-12 | 2601<sub>(+284) | 2766<sub>(+171) | 2934<sub>(+265) |  |
| 1.0 | 2025-11-08 | 2317<sub>(+new) | 2595<sub>(+new) | 2669<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
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

Generated: 2026-07-13 06:25:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2317, 2601, 2858, 2869]
  line "STC (8.0+0.08s)" [2317, 2601, 2858, 2869]
  line "LTC (60.0+0.60s)" [2595, 2766, 3056, 3129]
  line "VLTC (2m24s+1.12s)" [2669, 2934, 3156, 3221]
  line "VLTC (2m24s+1.12s)" [2669, 2934, 3156, 3221]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2317, 2601, 2858, 2869]
  line "STC (8.0+0.08s)" [2317, 2601, 2858, 2869]
  line "LTC (60.0+0.60s)" [2595, 2766, 3056, 3129]
  line "VLTC (2m24s+1.12s)" [2669, 2934, 3156, 3221]
  line "VLTC (2m24s+1.12s)" [2669, 2934, 3156, 3221]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3221 | 41 | 160 | 53% | 3202 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 43 | 164 | 51% | 3120 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2869 | 44 | 156 | 49% | 2880 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 100 | 26 | 56% | 3114 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3056 | 75 | 52 | 46% | 3081 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2858 | 123 | 22 | 52% | 2835 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 158 | 12 | 46% | 2970 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2766 | 79 | 52 | 52% | 2749 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2601 | 150 | 16 | 63% | 2481 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2669 | 100 | 32 | 33% | 2812 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2595 | 145 | 16 | 41% | 2680 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2317 | 71 | 70 | 41% | 2394 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |