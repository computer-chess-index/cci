# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.0 | 2026-06-24 | 2588<sub>(+578) | 2884<sub>(+577) | 2951<sub>(+549) |  |
| 0.1.0 | 2026-06-09 | 2010 | 2307 | 2402 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-08 06:26:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2010, 2588]
  line "STC (8.0+0.08s)" [2010, 2588]
  line "LTC (60.0+0.60s)" [2307, 2884]
  line "VLTC (2m24s+1.12s)" [2402, 2951]
  line "VLTC (2m24s+1.12s)" [2402, 2951]
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
  x-axis ["0.1.0", "0.2.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2010, 2588]
  line "STC (8.0+0.08s)" [2010, 2588]
  line "LTC (60.0+0.60s)" [2307, 2884]
  line "VLTC (2m24s+1.12s)" [2402, 2951]
  line "VLTC (2m24s+1.12s)" [2402, 2951]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 40 | 184 | 51% | 2935 | 48% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 36 | 238 | 47% | 2905 | 44% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2588 | 44 | 168 | 46% | 2627 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2402 | 36 | 278 | 49% | 2423 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2307 | 35 | 284 | 49% | 2314 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2010 | 37 | 266 | 48% | 2025 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |